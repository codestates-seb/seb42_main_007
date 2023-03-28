package com.was_surf.domain.lesson.repository;

import com.was_surf.domain.lesson.domain.LessonClass;
import com.was_surf.domain.lesson.domain.LessonRegister;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface LessonRegisterRepository extends JpaRepository<LessonRegister, Long> {
    Page<LessonRegister> findAllByMemberId(long memberId, PageRequest pageRequest);

    Optional<LessonRegister> findByLessonClassAndMemberId(LessonClass lessonClass, long memberId);
}
