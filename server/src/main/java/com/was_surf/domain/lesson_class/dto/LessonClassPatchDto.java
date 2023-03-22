package com.was_surf.domain.lesson_class.dto;

import com.was_surf.domain.lesson_class.domain.LessonClass;
import lombok.Getter;
import lombok.Setter;

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
