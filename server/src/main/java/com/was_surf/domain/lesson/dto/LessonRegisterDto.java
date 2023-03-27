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
        private long lessonClassId;

    }

    @Getter
    public static class Patch {
        @Setter
        private long lessonClassId;
        private LessonRegister.PayStatus payStatus;

    }

    @Getter
    @Builder
    public static class Response {
        private long memberId;
        private long lessonClassId;
        private LocalDateTime registerDate;
        private LessonRegister.PayStatus payStatus;
        private LocalDate cancelDate;
    }
}
