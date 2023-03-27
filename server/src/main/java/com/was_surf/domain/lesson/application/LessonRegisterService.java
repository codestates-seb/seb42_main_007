package com.was_surf.domain.lesson.application;

import com.was_surf.domain.lesson.domain.LessonClass;
import com.was_surf.domain.lesson.domain.LessonRegister;
import com.was_surf.domain.lesson.repository.LessonRegisterRepository;
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

import java.time.LocalDateTime;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
public class LessonRegisterService {
    private final LessonRegisterRepository lessonRegisterRepository;
    private final MemberService memberService;
    private final LessonClassService lessonClassService;

    // 강습 클래스 신청 생성
    public LessonRegister createRegister(LessonRegister lessonRegister, String email, long lessonClassId) {
        log.info("# createRegister");

        // 현재 로그인된 회원 정보 조회
        Member findMember = memberService.findMemberToEmail(email);

        // 입력된 강습 클래스 조회
        LessonClass findLessonClass = lessonClassService.findLessonClass(lessonClassId);

        // 감습클래스 주최자일 경우 신청 불가
        hostMemberCheck(findLessonClass, findMember);

        // 개인정보를 제외한 Member 객체 생성
        Member newMember = new Member(findMember.getMemberId(), findMember.getDisplayName(), findMember.getEmail());

        // 해당 강습 클래스를 이미 신청했는지 확인
        existRegisterCheck(findLessonClass, findMember);

        lessonRegister.setMember(newMember);
        lessonRegister.setLessonClass(findLessonClass);
        lessonRegister.getLessonClass().updateCurrentHeadCount(lessonRegister.getHeadCount());
        lessonRegister.setRegisterDate(LocalDateTime.now());
        // 신청 마감일 3일전까지 취소가능
        lessonRegister.setCancelDate(findLessonClass.getRegisterEnd().minusDays(3).toLocalDate());

        return lessonRegisterRepository.save(lessonRegister);
    }

    // 강습 클래스 신청 내역 수정
    public LessonRegister updateRegister(LessonRegister lessonRegister, String email) {
        log.info("# updateRegister");

        // 현재 로그인된 회원 정보 조회
        Member findMember = memberService.findMemberToEmail(email);

        verifyMatchMember(lessonRegister, findMember);

        LessonRegister findLessonRegister = verifiedRegister(lessonRegister.getLessonRegisterId());

        // 결제 상태
        findLessonRegister.changePayStatus(lessonRegister.getPayStatus());

        return findLessonRegister;
    }

    // 강습 클래스 신청 내역 조회
    public LessonRegister findRegister(long lessonRegisterId) {
        log.info("# findRegister");

        return verifiedRegister(lessonRegisterId);
    }

    // 강습 클래스 신청 내역 전체 조회
    public Page<LessonRegister> findRegisters(int page, int size, String email) {
        log.info("# findRegisters");

        Member findMember = memberService.findMemberToEmail(email);

        return lessonRegisterRepository.findAllByMember(findMember, PageRequest.of(page - 1, size, Sort.by("lessonClass").ascending()));
    }

    // 강습 클래스 신청 취소
    public void cancelRegister(long lessonRegisterId, String email) {
        log.info("# cancelRegister");

        // 현재 로그인된 계정 확인
        Member findMember = memberService.findMemberToEmail(email);

        LessonRegister lessonRegister = findRegister(lessonRegisterId);

        lessonRegisterRepository.delete(lessonRegister);
    }

    public LessonRegister verifiedRegister(long lessonRegisterId) {
        Optional<LessonRegister> optionalLessonRegister = lessonRegisterRepository.findById(lessonRegisterId);

        LessonRegister findLessonRegister = optionalLessonRegister.orElseThrow(() -> new BusinessLogicException(ExceptionCode.REGISTER_NOT_FOUND));

        return findLessonRegister;
    }

    // 강습클래스 주최자일 경우 신청 불가
    public void hostMemberCheck(LessonClass lessonClass, Member member) {
        if(lessonClass.getMember() == member) {
            throw new BusinessLogicException(ExceptionCode.IMPOSSIBLE_REGISTER);
        }
    }

    public void verifyMatchMember(LessonRegister lessonRegister, Member member) {
        long lessonRegisterHasMemberId = lessonRegister.getMember().getMemberId();
        long currentMemberId = member.getMemberId();

        // 작성자 계정 또는 관리자 계정인지 확인
        if(!(lessonRegisterHasMemberId == currentMemberId) || member.getRoles().contains("ADMIN")) {
            // 아닐 경우 에러 발생
            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_MATCH);
        }
    }

    // 해당 강습 클래스를 이미 신청했는지 확인
    public void existRegisterCheck(LessonClass lessonClass, Member member) {
        Optional<LessonRegister> optionalLessonRegister = lessonRegisterRepository.findByLessonClassAndMember(lessonClass, member);

        // 이미 신청한 강습 클래스라면 에러 발생
        if(optionalLessonRegister.isPresent()) {
            throw new BusinessLogicException(ExceptionCode.REGISTER_EXIST);
        }
    }
}
