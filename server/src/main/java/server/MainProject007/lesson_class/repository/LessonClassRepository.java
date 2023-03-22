package server.MainProject007.lesson_class.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import server.MainProject007.lesson_class.entity.LessonClass;

public interface LessonClassRepository extends JpaRepository<LessonClass, Long> {
}
