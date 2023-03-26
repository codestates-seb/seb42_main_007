package com.was_surf.domain.lesson_register.repository;

import com.was_surf.domain.lesson_register.domain.LessonRegister;
import com.was_surf.domain.member.domain.Member;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LessonRegisterRepository extends JpaRepository<LessonRegister, Long> {
    Page<LessonRegister> findAllByMember(Member member, PageRequest pageRequest);
}