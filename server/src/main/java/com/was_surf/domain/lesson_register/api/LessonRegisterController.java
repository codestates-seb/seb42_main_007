package com.was_surf.domain.lesson_register.api;

import com.was_surf.domain.lesson_class.application.LessonClassService;
import com.was_surf.domain.lesson_class.domain.LessonClass;
import com.was_surf.domain.lesson_register.application.LessonRegisterService;
import com.was_surf.domain.lesson_register.domain.LessonRegister;
import com.was_surf.domain.lesson_register.dto.LessonRegisterDto;
import com.was_surf.domain.lesson_register.mapper.LessonRegisterMapper;
import com.was_surf.domain.member.application.MemberService;
import com.was_surf.domain.member.domain.Member;
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
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/lesson-register")
@RequiredArgsConstructor
@Validated
public class LessonRegisterController {
    private final LessonRegisterService lessonRegisterService;
    private final LessonClassService lessonClassService;
    private final MemberService memberService;
    private final LessonRegisterMapper mapper;

    @PostMapping
    public ResponseEntity registerLesson(@RequestBody LessonRegisterDto.Post lessonRegisterPostDto,
                                         Principal principal) {
        // 현재 로그인된 회원 정보 조회
        Member member = memberService.findMemberToEmail(principal.getName());
        // 입력된 강습 클래스 조회
        LessonClass lessonClass = lessonClassService.findLessonClass(lessonRegisterPostDto.getLessonClassId());

        LessonRegister lessonRegister = mapper.lessonRegisterPostDtoToLessonRegister(lessonRegisterPostDto);
        lessonRegister.setMember(member);
        lessonRegister.setLessonClass(lessonClass);
        lessonRegister.setRegisterDate(LocalDateTime.now());
        lessonRegister.setCancelDate(LocalDate.now().plusDays(7));

        LessonRegister createdLessonRegister = lessonRegisterService.createRegister(lessonRegister);

        return new ResponseEntity<>(mapper.lessonRegisterToLessonRegisterResponseDto(createdLessonRegister), HttpStatus.CREATED);
    }

    @PatchMapping("/{lesson-register-id}")
    public ResponseEntity patchLessonRegister(@Positive @PathVariable("lesson-register-id") long lessonRegisterId,
                                              @RequestBody LessonRegisterDto.Patch lessonRegisterPatchDto,
                                              Principal principal) {
        // 현재 로그인된 회원 정보 조회
        Member member = memberService.findMemberToEmail(principal.getName());

        lessonRegisterPatchDto.setLessonClassId(lessonRegisterId);

        LessonRegister updatedLessonRegister = lessonRegisterService.updateRegister(mapper.lessonRegisterPatchDtoToLessonRegister(lessonRegisterPatchDto));

        return new ResponseEntity<>(mapper.lessonRegisterToLessonRegisterResponseDto(updatedLessonRegister), HttpStatus.OK);
    }

    // 신청한 강습 클래스 중 특정 강습 클래스 조회
    @GetMapping("/{lesson-register-id}")
    public ResponseEntity getLessonRegister(@Positive @PathVariable("lesson-register-id") long lessonRegisterId) {
        LessonRegister findLessonRegister = lessonRegisterService.findRegister(lessonRegisterId);
        return new ResponseEntity<>(mapper.lessonRegisterToLessonRegisterResponseDto(findLessonRegister), HttpStatus.OK);
    }

    // 현재 신청한 모든 강습 클래스 조회
    @GetMapping
    public ResponseEntity getLessonRegisters(@RequestParam int page, @RequestParam int size,
                                             Principal principal) {
        Member member = memberService.findMemberToEmail(principal.getName());

        Page<LessonRegister> pageLessonRegister = lessonRegisterService.findRegisters(page, size, member);
        List<LessonRegister> listLessonRegister = pageLessonRegister.getContent();

        return new ResponseEntity<>(new MultiResponseDto<>(mapper.lessonRegisterToLessonRegisterResponseDtos(listLessonRegister), pageLessonRegister), HttpStatus.OK);
    }

    @DeleteMapping("/{lesson-register-id}")
    public void deleteLessonRegister(@Positive @PathVariable("lesson-register-id") long lessonRegisterId) {
        LessonRegister findLessonRegister = lessonRegisterService.findRegister(lessonRegisterId);

        lessonRegisterService.cancelRegister(findLessonRegister);
    }
}
