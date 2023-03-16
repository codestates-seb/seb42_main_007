package com.was_surf.domain.lesson_class.dto;

import com.was_surf.domain.lesson_class.domain.LessonClass;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

@Builder
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
