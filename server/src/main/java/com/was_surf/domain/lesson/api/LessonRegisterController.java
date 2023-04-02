package com.was_surf.domain.lesson.api;

import com.was_surf.domain.lesson.application.LessonRegisterService;
import com.was_surf.domain.lesson.domain.LessonRegister;
import com.was_surf.domain.lesson.dto.LessonRegisterDto;
import com.was_surf.domain.lesson.mapper.LessonRegisterMapper;
import com.was_surf.global.common.response.MultiResponseDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.security.Principal;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/lesson-register")
@RequiredArgsConstructor
@Validated
public class LessonRegisterController {
    private final LessonRegisterService lessonRegisterService;
    private final LessonRegisterMapper mapper;

    @PostMapping
    public ResponseEntity registerLesson(@RequestBody LessonRegisterDto.Post lessonRegisterPostDto,
                                         Principal principal) {

        LessonRegister lessonRegister = mapper.lessonRegisterPostDtoToLessonRegister(lessonRegisterPostDto);

        LessonRegister createdLessonRegister = lessonRegisterService.createRegister(lessonRegister, principal.getName() , lessonRegisterPostDto.getLessonClassId());

        return new ResponseEntity<>(mapper.lessonRegisterToLessonRegisterResponseDto(createdLessonRegister), HttpStatus.CREATED);
    }

    @PatchMapping("/{lesson-register-id}")
    public ResponseEntity patchLessonRegister(@Positive @PathVariable("lesson-register-id") long lessonRegisterId,
                                              @RequestBody LessonRegisterDto.Patch lessonRegisterPatchDto,
                                              Principal principal) {
        lessonRegisterPatchDto.setLessonClassId(lessonRegisterId);

        LessonRegister updatedLessonRegister = lessonRegisterService.updateRegister(mapper.lessonRegisterPatchDtoToLessonRegister(lessonRegisterPatchDto), principal.getName());

        return new ResponseEntity<>(mapper.lessonRegisterToLessonRegisterResponseDto(updatedLessonRegister), HttpStatus.OK);
    }

    // 신청한 강습 클래스 중 특정 강습 클래스 조회
    @GetMapping("/{lesson-register-id}")
    public ResponseEntity getLessonRegister(@Positive @PathVariable("lesson-register-id") Long lessonRegisterId) {
        LessonRegister findLessonRegister = lessonRegisterService.findRegister(lessonRegisterId);

        return new ResponseEntity<>(mapper.lessonRegisterToLessonRegisterResponseDto(findLessonRegister), HttpStatus.OK);
    }

    // 현재 신청한 모든 강습 클래스 조회
    @GetMapping
    public ResponseEntity getLessonRegisters(@RequestParam int page, @RequestParam int size,
                                             Principal principal) {
        Page<LessonRegister> pageLessonRegister = lessonRegisterService.findRegisters(page, size, principal.getName());
        List<LessonRegister> listLessonRegister = pageLessonRegister.getContent();

        return new ResponseEntity<>(new MultiResponseDto<>(mapper.lessonRegisterToLessonRegisterResponseDtos(listLessonRegister), pageLessonRegister), HttpStatus.OK);
    }

    @DeleteMapping("/{lesson-register-id}")
    public ResponseEntity cancelLessonRegister(@Positive @PathVariable("lesson-register-id") Long lessonRegisterId,
                                     Principal principal) {
        lessonRegisterService.cancelRegister(lessonRegisterId, principal.getName());

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
