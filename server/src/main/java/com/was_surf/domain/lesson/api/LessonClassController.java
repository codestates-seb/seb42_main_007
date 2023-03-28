package com.was_surf.domain.lesson.api;

import com.was_surf.domain.lesson.application.LessonClassService;
import com.was_surf.domain.lesson.domain.LessonClass;
import com.was_surf.domain.lesson.dto.LessonClassDto;
import com.was_surf.domain.lesson.mapper.LessonClassMapper;
import com.was_surf.global.common.response.MultiResponseDto;
import com.was_surf.global.common.response.SingleResponseDto;
import com.was_surf.global.utils.UriCreator;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.net.URI;
import java.security.Principal;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/lesson-class")
@RequiredArgsConstructor
@Validated
public class LessonClassController {
    private final static String LESSON_CLASS_DEFAULT_URL = "/lesson-class";
    private final LessonClassMapper mapper;
    private final LessonClassService lessonClassService;

    // 강습 클래스 모집 글 생성
    @PostMapping
    public ResponseEntity postLessonClass(@RequestBody LessonClassDto.Post lessonClassPostDto,
                                          Principal principal) {
        LessonClass lessonClass = mapper.lessonClassPostDtoToLessonClass(lessonClassPostDto);
        log.info("# principal" + principal);

        LessonClass createdLessonClass = lessonClassService.createLessonClass(lessonClass, principal.getName());

        URI location = UriCreator.createUri(LESSON_CLASS_DEFAULT_URL, createdLessonClass.getLessonClassId());

//        return ResponseEntity.created(location).build();
        return new ResponseEntity<>(mapper.lessonClassToLessonClassResponseDto(createdLessonClass), HttpStatus.CREATED);
    }

    @PatchMapping("/{lesson-class-id}")
    public ResponseEntity patchLessonClass(@PathVariable("lesson-class-id") Long lessonClassId,
                                           @RequestBody LessonClassDto.Patch lessonClassPatchDto,
                                           Principal principal) {
        lessonClassPatchDto.setLessonClassId(lessonClassId);

        LessonClass lessonClass = lessonClassService.updateLessonClass(mapper.lessonClassPatchDtoToLessonClass(lessonClassPatchDto), principal.getName());

        return new ResponseEntity<>(mapper.lessonClassToLessonClassResponseDto(lessonClass), HttpStatus.OK);
    }

    @GetMapping("/{lesson-class-id}")
    public ResponseEntity getLessonClass(@PathVariable("lesson-class-id") @Positive Long lessonClassId) {
        LessonClass findLessonClass = lessonClassService.findLessonClass(lessonClassId);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.lessonClassToLessonClassResponseDto(findLessonClass)), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getLessonClasses(@Positive @RequestParam int page,
                                           @Positive @RequestParam int size) {
        Page<LessonClass> pageLessonClasses = lessonClassService.findLessonClasses(page - 1, size);
        List<LessonClass> listLessonClasses = pageLessonClasses.getContent();

        return new ResponseEntity<>(new MultiResponseDto<>(mapper.lessonClassToLessonClassResponseDtos(listLessonClasses), pageLessonClasses), HttpStatus.OK);
    }

    @DeleteMapping("/{lesson-class-id}")
    public void deleteLessonClass(@PathVariable("lesson-class-id") @Positive Long lessonClassId,
                                  Principal principal) {
        // 작성한 회원 및 관리자 계정만 삭제 가능
        lessonClassService.deleteLessonClass(lessonClassId, principal.getName());
    }
}
