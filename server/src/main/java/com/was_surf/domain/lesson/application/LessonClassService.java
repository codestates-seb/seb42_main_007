package com.was_surf.domain.lesson.application;

import com.was_surf.domain.lesson.domain.LessonClass;
import com.was_surf.domain.lesson.repository.LessonClassRepository;
import com.was_surf.domain.member.application.MemberService;
import com.was_surf.domain.member.domain.Member;
import com.was_surf.global.error.exception.BusinessLogicException;
import com.was_surf.global.error.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
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

        // 권한이 있는 계정인지 확인
        verifyMemberRole(member);

        Member newMember = new Member(member.getMemberId(), member.getDisplayName(), member.getEmail());

        // 회원 정보 주입
        lessonClass.setMember(newMember);
        lessonClass.setCurrentHeadCount(0);

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
    public void deleteLessonClass(Long lessonClassId, String email) {
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
    public LessonClass findVerifiedLessonClass(Long lessonClassId) {
        Optional<LessonClass> optionalLessonClass = lessonClassRepository.findById(lessonClassId);

        LessonClass findLessonClass = optionalLessonClass.orElseThrow(() -> new BusinessLogicException(ExceptionCode.LESSON_CLASS_NOT_FOUND));

        return findLessonClass;
    }

    // 로그인된 계정이 강습클래스를 주최할 권한이 있는지 확인
    public void verifyMemberRole(Member member) {
        List<String> roles = member.getRoles();

        // 관리자 계정 또는 강사 계정인지 확인
        if(!roles.contains("ADMIN") && !roles.contains("TEACHER")) {
            // 아닐 경우 에러 발생
            throw new BusinessLogicException(ExceptionCode.NOT_PERMISSION_MEMBER);
        }
    }

    // 로그인된 정보가 수정 권한을 가지는지 확인
    public void verifyMatchMember(LessonClass lessonClass, Member member) {
        long lessonClassHasMemberId = lessonClass.getMember().getMemberId();
        long currentMemberId = member.getMemberId();

        if(!(lessonClassHasMemberId == currentMemberId) || member.getRoles().contains("ADMIN")) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_MATCH);
        }
    }
}
