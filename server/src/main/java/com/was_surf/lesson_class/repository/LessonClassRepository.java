package com.was_surf.lesson_class.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.was_surf.lesson_class.entity.LessonClass;

public interface LessonClassRepository extends JpaRepository<LessonClass, Long> {
}
