package com.was_surf.lesson_class.dto;

import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class LessonClassPostDto {
    private long lessonClassId;
    private String lessonClassTitle;
    private String lessonClassContent;
    private LocalDateTime lessonStart;
    private LocalDateTime lessonEnd;
    private int headCount;
}
