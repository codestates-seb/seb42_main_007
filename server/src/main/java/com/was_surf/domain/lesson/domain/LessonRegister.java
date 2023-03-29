package com.was_surf.domain.lesson.domain;

import com.was_surf.domain.member.domain.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Optional;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class LessonRegister {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long lessonRegisterId;
    @Column(nullable = false)
    private LocalDateTime registerDate;
    @Enumerated(value = EnumType.STRING)
    private PayStatus payStatus = PayStatus.Y;
    @Column(nullable = false)
    private LocalDate cancelDate;
    @Column(nullable = false)
    private int headCount;
    @ManyToOne
    @JoinColumn(name = "MEMBER_ID", nullable = false)
    private Member member;

    @ManyToOne
    @JoinColumn(name = "LESSON_CLASS_ID", referencedColumnName = "lessonClassId", nullable = false)
    private LessonClass lessonClass;

    public void changePayStatus(PayStatus payStatus) {
        Optional.ofNullable(payStatus)
                .ifPresent(status -> this.payStatus = status);
    }

    public void setMember(Member member) {
        this.member = member;
    }

    public void setLessonClass(LessonClass lessonClass) {
        this.lessonClass = lessonClass;

        if(this.lessonClass.getLessonRegisters().contains(this)) {
            this.lessonClass.getLessonRegisters().add(this);
        }
    }

    public enum PayStatus {
        Y("결제 완료"),
        N("결제 미완료");

        @Getter
        private String status;

        PayStatus(String status) {
            this.status = status;
        }
    }
}
