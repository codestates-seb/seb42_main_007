package com.was_surf.domain.lesson_class.domain;

import com.was_surf.domain.member.domain.Member;
import lombok.Getter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Entity
public class MemberLessonClass {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long memberLessonClassId;
    @Column(nullable = false)
    private LocalDateTime registerDate;
    @Enumerated(value = EnumType.STRING)
    private PayStatus payStatus = PayStatus.Y;
    @Column(nullable = false)
    private LocalDateTime cancelDate;
    @ManyToOne
    @JoinColumn(name = "MEMBER_ID", nullable = false)
    private Member member;
    @ManyToOne
    @JoinColumn(name = "LESSON_CLASS_ID", nullable = false)
    private LessonClass lessonClass;

    public void setMember(Member member) {
        this.member = member;
        if(!this.member.getMemberLessonClasses().contains(this)) {
            this.member.getMemberLessonClasses().add(this);
        }
    }

    public void setLessonClass(LessonClass lessonClass) {
        this.lessonClass = lessonClass;
        if(this.lessonClass.getMemberLessonClasses().contains(this)) {
            this.lessonClass.getMemberLessonClasses().add(this);
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
