package com.was_surf.domain.lesson.dto;

import com.was_surf.domain.lesson.domain.LessonRegister;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

public class LessonClassDto {
    @Getter
    public static class Post {
        private Long lessonClassId;
        private String title;
        private String content;
        private LocalDateTime registerStart;
        private LocalDateTime registerEnd;
        private LocalDate lessonDate;
        private int headCount;
        private int price;
    }

    @Getter
    public static class Patch {
        @Setter
        private Long lessonClassId;
        private String title;
        private String content;
        private LocalDateTime registerStart;
        private LocalDateTime registerEnd;
        private LocalDate lessonDate;
        private int headCount;
        private int price;
    }

    @Getter
    @Builder
    public static class Response {
        private Long memberId;
        private Long lessonClassId;
        @NotBlank
        private String title;
        @NotBlank
        private String content;
        @NotNull
        private LocalDateTime registerStart;
        @NotNull
        private LocalDateTime registerEnd;
        @NotNull
        private LocalDate lessonDate;
        @NotNull
        private Integer headCount;
        @NotNull
        private int currentHeadCount;
        @NotNull
        private Integer price;
        private List<LessonRegister> lessonRegisters;
    }
}
