package com.was_surf.domain.lesson.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.was_surf.domain.lesson.domain.LessonClass;

public interface LessonClassRepository extends JpaRepository<LessonClass, Long> {
}
