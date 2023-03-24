package com.was_surf.domain.lesson_class.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.was_surf.domain.lesson_class.domain.LessonClass;

public interface LessonClassRepository extends JpaRepository<LessonClass, Long> {
}
