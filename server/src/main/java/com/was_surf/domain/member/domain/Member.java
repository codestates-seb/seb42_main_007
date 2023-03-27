package com.was_surf.domain.member.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.was_surf.domain.board_post.domain.BoardPost;
import com.was_surf.domain.lesson.domain.LessonClass;
import com.was_surf.domain.lesson.domain.LessonRegister;
import com.was_surf.domain.spot_review.domain.SpotReview;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "members")
public class Member implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long memberId;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, name = "STATUS")
    private MemberStatus memberStatus = MemberStatus.MEMBER_EXIST;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String displayName;

    @Column(nullable = false, updatable = false, unique = true)
    private String email;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String password;

    @ElementCollection(fetch = FetchType.EAGER)
//    @Column
    private List<String> roles = new ArrayList<>();

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.roles.stream()
                .map(SimpleGrantedAuthority::new)
                .collect(Collectors.toList());
    }
    @Override
    public String getUsername() {
        return null;
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return false;
    }

    public Member(String displayName, String email, String password) {
        this.displayName = displayName;
        this.email = email;
        this.password = password;
    }

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
    private List<BoardPost> boardPosts = new ArrayList<>();

//    @OneToMany(mappedBy = "member", cascade = {CascadeType.REMOVE, CascadeType.REFRESH})
//    private List<BoardComment> boardComments = new ArrayList<>();

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL)
    private List<SpotReview> spotReviews = new ArrayList<>();

    @OneToMany(mappedBy = "member", cascade = CascadeType.REMOVE, fetch = FetchType.LAZY)
    private List<LessonClass> lessonClasses = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "member", cascade = CascadeType.REMOVE, fetch = FetchType.LAZY)
    private List<LessonRegister> lessonRegisters = new ArrayList<>();

    public void addLessonRegister(LessonRegister lessonRegister) {
        lessonRegisters.add(lessonRegister);
    }


    // 개인정보를 제외한 객체 생성자
    public Member(long memberId, String displayName, String email) {
        this.memberId = memberId;
        this.displayName = displayName;
        this.email = email;
    }

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
