package server.MainProject007.lesson_class.dto;

import lombok.Getter;
import lombok.Setter;
import server.MainProject007.lesson_class.entity.LessonClass;

import java.time.LocalDateTime;

@Getter
public class LessonClassPatchDto {
    @Setter
    private long lessonClassId;
    private String lessonClassTitle;
    private String lessonClassContent;
    private LocalDateTime lessonStart;
    private LocalDateTime lessonEnd;
    private int headCount;
    private LessonClass.LessonStatus lessonStatus;
}
