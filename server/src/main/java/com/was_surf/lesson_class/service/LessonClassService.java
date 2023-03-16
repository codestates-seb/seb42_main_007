package com.was_surf.lesson_class.service;

import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import com.was_surf.exception.BusinessLogicException;
import com.was_surf.exception.ExceptionCode;
import com.was_surf.lesson_class.entity.LessonClass;
import com.was_surf.lesson_class.repository.LessonClassRepository;

import java.util.Optional;

@Slf4j
@Service
public class LessonClassService {
    private final LessonClassRepository lessonClassRepository;

    public LessonClassService(LessonClassRepository lessonClassRepository) {
        this.lessonClassRepository = lessonClassRepository;
    }

    // 강습클래스 생성 및 Repository 저장
    public LessonClass createLessonClass(LessonClass lessonClass) {
        log.info("# create LessonClass");

        return lessonClassRepository.save(lessonClass);
    }

    // 강습클래스 수정 및 Repository 저장
    public LessonClass updateLessonClass(LessonClass lessonClass) {
        log.info("# update LessonClass");

        LessonClass findLessonClass = findVerifiedLessonClass(lessonClass.getLessonClassId());

        // 강습클래스 제목
        Optional.ofNullable(lessonClass.getLessonClassTitle())
                .ifPresent(findLessonClass::setLessonClassTitle);
        // 강습클래스 내용
        Optional.ofNullable(lessonClass.getLessonClassContent())
                .ifPresent(findLessonClass::setLessonClassContent);
        // 강습클래스 신청 시작 기간
        Optional.ofNullable(lessonClass.getLessonStart())
                .ifPresent(findLessonClass::setLessonStart);
        // 강습클래스 신청 마감 기간
        Optional.ofNullable(lessonClass.getLessonEnd())
                .ifPresent(findLessonClass::setLessonEnd);
        // 강습클래스 모집 최대 인원
        Optional.ofNullable(lessonClass.getHeadCount())
                .ifPresent(findLessonClass::setHeadCount);
        // 강습클래스 삭제 상태
        Optional.ofNullable(lessonClass.getLessonStatus())
                .ifPresent(findLessonClass::setLessonStatus);

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
    public void deleteLessonClass(long lessonClassId) {
        log.info("# delete LessonClass");

        // 해당 아이디의 강습클래스가 유효한지 확인
        LessonClass findLessonClass = findVerifiedLessonClass(lessonClassId);
        lessonClassRepository.delete(findLessonClass);
    }

    // 강습클래스가 유효한지 확인
    public LessonClass findVerifiedLessonClass(long lessonClassId) {
        Optional<LessonClass> optionalLessonClass = lessonClassRepository.findById(lessonClassId);

        LessonClass findLessonClass = optionalLessonClass.orElseThrow(() -> new BusinessLogicException(ExceptionCode.LESSON_CLASS_NOT_FOUND));

        return findLessonClass;
    }
}
