package com.was_surf.domain.lesson_class.domain;

import com.was_surf.global.common.audit.Auditable;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Setter
@Getter
@NoArgsConstructor
@Entity
public class LessonClass extends Auditable {
//public class LessonClass {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long lessonClassId;
    private String lessonClassTitle;
    private String lessonClassContent;
    private LocalDateTime lessonStart;
    private LocalDateTime lessonEnd;
    private int headCount;

    public LessonClass(String lessonClassTitle, String lessonClassContent, LocalDateTime lessonStart, LocalDateTime lessonEnd, int headCount) {
        this.lessonClassTitle = lessonClassTitle;
        this.lessonClassContent = lessonClassContent;
        this.lessonStart = lessonStart;
        this.lessonEnd = lessonEnd;
        this.headCount = headCount;
    }

    @Enumerated(value = EnumType.STRING)
    private LessonStatus lessonStatus = LessonStatus.POSSIBILITY;

    public enum LessonStatus {
        POSSIBILITY("현재 강습을 신청할 수 있습니다."),
        IMPOSSIBILITY("현재 강습을 신청할 수 없습니다.");

        @Getter
        private String status;

        LessonStatus(String status) {
            this.status = status;
        }
    }
}
