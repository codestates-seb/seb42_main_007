package server.MainProject007.lesson_class.dto;

import lombok.Builder;
import lombok.Getter;
import server.MainProject007.lesson_class.entity.LessonClass;

import javax.persistence.Enumerated;
import java.time.LocalDateTime;

@Getter
public class LessonClassResponseDto {
    private long lessonClassId;
    private String lessonClassTitle;
    private String lessonClassContent;
    private LocalDateTime lessonStart;
    private LocalDateTime lessonEnd;
    private int headCount;
    private LessonClass.LessonStatus lessonStatus;
    public String getLessonStatus() {
        return lessonStatus.getStatus();
    }
}
