package com.was_surf.domain.lesson_register.application;

import com.was_surf.domain.lesson_register.domain.LessonRegister;
import com.was_surf.domain.lesson_register.repository.LessonRegisterRepository;
import com.was_surf.domain.member.domain.Member;
import com.was_surf.global.error.exception.BusinessLogicException;
import com.was_surf.global.error.exception.ExceptionCode;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LessonRegisterService {
    private final LessonRegisterRepository lessonRegisterRepository;

    public LessonRegisterService(LessonRegisterRepository repository) {
        this.lessonRegisterRepository = repository;
    }

    // 강습 클래스 신청 생성
    public LessonRegister createRegister(LessonRegister lessonRegister) {
        return lessonRegisterRepository.save(lessonRegister);
    }

    // 강습 클래스 신청 내역 수정
    public LessonRegister updateRegister(LessonRegister lessonRegister) {
        LessonRegister findLessonRegister = verifiedRegister(lessonRegister.getLessonRegisterId());

        // 결제 상태
        Optional.ofNullable(findLessonRegister.getPayStatus())
                .ifPresent(findLessonRegister::setPayStatus);

        return findLessonRegister;
    }

    // 강습 클래스 신청 내역 조회
    public LessonRegister findRegister(long lessonRegisterId) {
        return verifiedRegister(lessonRegisterId);
    }

    // 강습 클래스 신청 내역 전체 조회
    public Page<LessonRegister> findRegisters(int page, int size, Member member) {
        return lessonRegisterRepository.findAllByMember(member, PageRequest.of(page - 1, size, Sort.by("lessonClass").ascending()));
    }

    // 강습 클래스 신청 취소
    public void cancelRegister(LessonRegister lessonRegister) {
        lessonRegisterRepository.delete(lessonRegister);
    }

    public LessonRegister verifiedRegister(long lessonRegisterId) {
        Optional<LessonRegister> optionalLessonRegister = lessonRegisterRepository.findById(lessonRegisterId);

        LessonRegister findLessonRegister = optionalLessonRegister.orElseThrow(() -> new BusinessLogicException(ExceptionCode.REGISTER_NOT_FOUND));

        return findLessonRegister;
    }

    public void verifyMatchMember(LessonRegister lessonRegister, Member member) {
        long lessonRegisterHasMemberId = lessonRegister.getMember().getMemberId();
        long currentMemberId = member.getMemberId();

        if(!(lessonRegisterHasMemberId == currentMemberId) || member.getRoles().toString().equals("ADMIN")) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_MATCH);
        }
    }
}
