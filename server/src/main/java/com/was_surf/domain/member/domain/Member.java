package com.was_surf.domain.member.domain;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.was_surf.domain.lesson_register.domain.LessonRegister;
import com.was_surf.domain.board_post.domain.BoardPost;
import com.was_surf.domain.spot_review.domain.SpotReview;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import com.was_surf.global.common.audit.Auditable;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name = "members")
public class Member  {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long memberId;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, name = "STATUS")
    private MemberStatus memberStatus = MemberStatus.MEMBER_EXIST;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String displayName;

    @Column(nullable = false, updatable = false, unique = true, columnDefinition = "TEXT")
    private String email;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String password;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String aboutMe;


    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "member", cascade = CascadeType.PERSIST)
    private List<LessonRegister> lessonRegisters = new ArrayList<>();

    public void addMemberLessonClass(LessonRegister lessonRegister) {
        lessonRegisters.add(lessonRegister);
        if(lessonRegister.getMember() != this) {
            lessonRegister.setMember(this);
        }
    }


    public Member(String displayName, String email, String password) {
        this.displayName = displayName;
        this.email = email;
        this.password = password;
    }


    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
    private List<BoardPost> boardPosts = new ArrayList<>();

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
    private List<SpotReview> spotReviews = new ArrayList<>();


    public enum MemberStatus{
        MEMBER_NOT_EXIST("존재하지 않는 회원"),
        MEMBER_EXIST("활동중인 회원");

        @Getter
        private String status;

        MemberStatus(String status){
            this.status = status;
        }
    }
}
