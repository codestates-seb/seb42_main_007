package com.was_surf.domain.lesson.repository;

import com.was_surf.domain.lesson.domain.LessonClass;
import com.was_surf.domain.lesson.domain.LessonRegister;
import com.was_surf.domain.member.domain.Member;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface LessonRegisterRepository extends JpaRepository<LessonRegister, Long> {
    Page<LessonRegister> findAllByMember(Member member, PageRequest pageRequest);

    Optional<LessonRegister> findByLessonClassAndMember(LessonClass lessonClass, Member member);
}
