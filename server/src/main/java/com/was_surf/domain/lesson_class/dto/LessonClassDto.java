package com.was_surf.domain.lesson_class.dto;

import com.was_surf.domain.lesson_class.domain.LessonClass;
import com.was_surf.domain.lesson_register.domain.LessonRegister;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.time.LocalDateTime;
import java.util.List;

public class LessonClassDto {
    @Getter
    public static class Post {
        private long lessonClassId;
        private String title;
        private String content;
        private LocalDateTime registerStart;
        private LocalDateTime registerEnd;
        private int headCount;
    }

    @Getter
    public static class Patch {
        @Setter
        private long lessonClassId;
        private String title;
        private String content;
        private LocalDateTime registerStart;
        private LocalDateTime registerEnd;
        private int headCount;
        private LessonClass.LessonStatus lessonStatus;
    }

    @Getter
    @Builder
    public static class Response {
        private String memberId;
        private long lessonClassId;
        @NotBlank
        private String title;
        @NotBlank
        private String content;
        @NotNull
        private LocalDateTime registerStart;
        @NotNull
        private LocalDateTime registerEnd;
        @NotNull
        private int headCount;
        @NotNull
        private int price;
        private LessonClass.LessonStatus lessonStatus;
        private List<LessonRegister> lessonRegisters;
        public String getLessonStatus() {
            return lessonStatus.getStatus();
        }
    }
}
