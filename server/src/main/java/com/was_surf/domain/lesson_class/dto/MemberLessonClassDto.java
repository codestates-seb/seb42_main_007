package com.was_surf.domain.lesson_class.dto;

import com.was_surf.domain.lesson_class.domain.LessonClass;
import com.was_surf.domain.lesson_class.domain.MemberLessonClass;
import com.was_surf.domain.member.domain.Member;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;

public class MemberLessonClassDto {
    @Getter
    @Builder
    public static class Response {
        private long memberId;
        private long lessonClassId;
        private LocalDateTime registerDate;
        private MemberLessonClass.PayStatus payStatus;
        private LocalDateTime cancelDate;
    }
}
