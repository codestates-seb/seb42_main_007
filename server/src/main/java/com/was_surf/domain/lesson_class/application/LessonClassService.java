package com.was_surf.domain.lesson_class.application;

import com.was_surf.domain.lesson_class.domain.LessonClass;
import com.was_surf.domain.lesson_class.repository.LessonClassRepository;
import com.was_surf.domain.member.application.MemberService;
import com.was_surf.domain.member.domain.Member;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import com.was_surf.global.error.exception.BusinessLogicException;
import com.was_surf.global.error.exception.ExceptionCode;

import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class LessonClassService {
    private final LessonClassRepository lessonClassRepository;
    private final MemberService memberService;

    // 강습클래스 생성 및 Repository 저장
    public LessonClass createLessonClass(LessonClass lessonClass, String email) {
        log.info("# create LessonClass");

        // 현재 로그인된 회원 정보 조회
        Member member = memberService.findMemberToEmail(email);

        // 회원 정보 주입
        lessonClass.setMember(member);

        return lessonClassRepository.save(lessonClass);
    }

    // 강습클래스 수정 및 Repository 저장
    public LessonClass updateLessonClass(LessonClass lessonClass, String email) {
        log.info("# update LessonClass");

        // 현재 로그인한 회원 정보 조회
        Member findMember = memberService.findMemberToEmail(email);

        LessonClass findLessonClass = findVerifiedLessonClass(lessonClass.getLessonClassId());

        // 작성자와 관리자 계정일 경우에만 수정
        verifyMatchMember(findLessonClass, findMember);

        // 강습 클래스 수정
        findLessonClass.updateLessonClass(lessonClass);

        // 수정된 강습클래스 Repository에 저장
        return lessonClassRepository.save(findLessonClass);
    }

    // 특정 강습클래스 조회
    public LessonClass findLessonClass(long lessonClassId) {
        log.info("# find LessonClass");

        return findVerifiedLessonClass(lessonClassId);
    }

    // 모든 강습클래스 조회
    public Page<LessonClass> findLessonClasses(int page, int size) {
        log.info("# find LessonClasses");

        // 최신 강습클래스가 먼저 조회되도록 오름차순으로 정렬
        return lessonClassRepository.findAll(PageRequest.of(page, size, Sort.by("lessonClassId").ascending()));
    }

    // 특정 강습클래스 삭제
    public void deleteLessonClass(long lessonClassId, String email) {
        log.info("# delete LessonClass");

        // 현재 로그인한 회원 정보 조회
        Member findMember = memberService.findMemberToEmail(email);

        // 해당 아이디의 강습클래스가 유효한지 확인
        LessonClass findLessonClass = findVerifiedLessonClass(lessonClassId);

        // 작성자와 관리자 계정일 경우에만 삭제
        verifyMatchMember(findLessonClass, findMember);

        lessonClassRepository.delete(findLessonClass);
    }

    // 강습클래스가 유효한지 확인
    public LessonClass findVerifiedLessonClass(long lessonClassId) {
        Optional<LessonClass> optionalLessonClass = lessonClassRepository.findById(lessonClassId);

        LessonClass findLessonClass = optionalLessonClass.orElseThrow(() -> new BusinessLogicException(ExceptionCode.LESSON_CLASS_NOT_FOUND));

        return findLessonClass;
    }

    // 로그인된 정보가 접근 권한을 가지는지 확인
    public void verifyMatchMember(LessonClass lessonClass, Member member) {
        long lessonClassHasMemberId = lessonClass.getMember().getMemberId();
        long currentMemberId = member.getMemberId();

        if(!(lessonClassHasMemberId == currentMemberId) || (member.getRoles().toString().equals("TEACHER") && member.getRoles().toString().equals("ADMIN"))) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_MATCH);
        }
    }
}
