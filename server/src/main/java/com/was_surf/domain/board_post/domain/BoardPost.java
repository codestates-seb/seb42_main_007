package com.was_surf.domain.board_post.domain;

import com.was_surf.domain.board_comment.domain.BoardComment;
import com.was_surf.domain.member.domain.Member;
import com.was_surf.global.common.audit.Auditable;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class BoardPost extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long boardPostId;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String content;

    @Column(nullable = false)
    private String imgPath;

    @Column(columnDefinition = "integer default 0", nullable = false)
    private long viewCount;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @OneToMany(mappedBy = "boardPost", cascade = CascadeType.ALL)
    private List<BoardComment> boardComments = new ArrayList<>();

    public void setMember(Member member) {
        this.member = member;

        //등록된 member의 boardPostList가 해당 boardPost을 담고 있지 않다면
        //해당 boardPost 객체를 boardPostList에 추가한다
        if (!member.getBoardPosts().contains(this)) {
            member.getBoardPosts().add(this);
        }

    }
}