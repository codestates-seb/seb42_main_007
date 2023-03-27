package com.was_surf.domain.lesson.dto;

import com.was_surf.domain.lesson.domain.LessonRegister;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.time.LocalDateTime;

public class LessonRegisterDto {
    @Getter
    public static class Post {
        private Long lessonClassId;
        private Integer headCount;

    }

    @Getter
    public static class Patch {
        @Setter
        private Long lessonClassId;
        private LessonRegister.PayStatus payStatus;

    }

    @Getter
    @Builder
    public static class Response {
        private Long memberId;
        private Long lessonClassId;
        private LocalDateTime registerDate;
        private LessonRegister.PayStatus payStatus;
        private LocalDate cancelDate;
    }
}
