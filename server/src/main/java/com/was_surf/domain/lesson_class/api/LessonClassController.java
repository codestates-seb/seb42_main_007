package com.was_surf.domain.lesson_class.api;

import com.was_surf.domain.lesson_class.domain.LessonClass;
import com.was_surf.domain.lesson_class.dto.LessonClassDto;
import com.was_surf.domain.lesson_class.mapper.LessonClassMapper;
import com.was_surf.domain.lesson_class.application.LessonClassService;
import com.was_surf.domain.member.application.MemberService;
import com.was_surf.domain.member.domain.Member;
import com.was_surf.global.common.response.MultiResponseDto;
import com.was_surf.global.common.response.SingleResponseDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import com.was_surf.global.utils.UriCreator;

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
    private final MemberService memberService;

    @PostMapping
    public ResponseEntity postLessonClass(@RequestBody LessonClassDto.Post lessonClassPostDto) {
        LessonClass lessonClass = mapper.lessonClassPostDtoToLessonClass(lessonClassPostDto);

        // 현재 로그인된 회원 정보 검색
//        Object principal = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
//        UserDetails userDetails = (UserDetails) principal;
//
//        log.info("# username: " + userDetails.getUsername());
//        log.info("# password: " + userDetails.getPassword());
//        Member member = memberService.findMemberToEmail(principal.getName());
        Member member = memberService.findMember(lessonClassPostDto.getMemberId());
        // 회원 정보 주입
        lessonClass.setMember(member);

        LessonClass createdLessonClass = lessonClassService.createLessonClass(lessonClass);

        URI location = UriCreator.createUri(LESSON_CLASS_DEFAULT_URL, createdLessonClass.getLessonClassId());

        return ResponseEntity.created(location).build();
    }

    @PatchMapping("/{lesson-class-id}")
    public ResponseEntity patchLessonClass(@PathVariable("lesson-class-id") long lessonClassId,
                                           @RequestBody LessonClassDto.Patch lessonClassPatchDto) {
        lessonClassPatchDto.setLessonClassId(lessonClassId);

        LessonClass lessonClass = lessonClassService.updateLessonClass(mapper.lessonClassPatchDtoToLessonClass(lessonClassPatchDto));

        return new ResponseEntity<>(mapper.lessonClassToLessonClassResponseDto(lessonClass), HttpStatus.OK);
    }

    @GetMapping("/{lesson-class-id}")
    public ResponseEntity getLessonClass(@PathVariable("lesson-class-id") @Positive long lessonClassId) {
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
    public void deleteLessonClass(@PathVariable("lesson-class-id") @Positive long lessonClassId) {
        lessonClassService.deleteLessonClass(lessonClassId);
    }
}
