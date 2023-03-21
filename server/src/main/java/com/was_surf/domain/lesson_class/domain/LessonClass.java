package com.was_surf.domain.lesson_class.domain;

import com.was_surf.domain.member.domain.Member;
import com.was_surf.global.common.audit.Auditable;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Setter
@Getter
@NoArgsConstructor
@Entity
public class LessonClass extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long lessonClassId;
    @Column(nullable = false)
    private String title;
    @Column(nullable = false)
    private String content;
    @Column(nullable = false)
    private LocalDateTime registerStart;
    @Column(nullable = false)
    private LocalDateTime registerEnd;
    @Column(nullable = false)
    private int headCount;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @OneToMany(mappedBy = "lessonClass", cascade = CascadeType.PERSIST)
    private List<MemberLessonClass> memberLessonClasses = new ArrayList<>();

    public void setMember(Member member) {
        this.member = member;
    }

    public void addMemberLessonClass(MemberLessonClass memberLessonClass) {
        memberLessonClasses.add(memberLessonClass);
        if(memberLessonClass.getLessonClass() != this) {
            memberLessonClass.setLessonClass(this);
        }
    }

    public LessonClass(String title, String content, LocalDateTime registerStart, LocalDateTime registerEnd, int headCount) {
        this.title = title;
        this.content = content;
        this.registerStart = registerStart;
        this.registerEnd = registerEnd;
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
