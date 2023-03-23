package com.was_surf.domain.lesson_register.domain;

import com.was_surf.domain.lesson_class.domain.LessonClass;
import com.was_surf.domain.member.domain.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;

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
    private PayStatus payStatus = PayStatus.N;
    @Column(nullable = false)
    private LocalDate cancelDate;
    @ManyToOne
    @JoinColumn(name = "MEMBER_ID", referencedColumnName = "memberId", nullable = false)
    private Member member;
    @ManyToOne
    @JoinColumn(name = "LESSON_CLASS_ID", referencedColumnName = "lessonClassId", nullable = false)
    private LessonClass lessonClass;

    public void setMember(Member member) {
        this.member = member;
        if(!this.member.getLessonRegisters().contains(this)) {
            this.member.getLessonRegisters().add(this);
        }
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
