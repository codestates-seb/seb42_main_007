package server.MainProject007.boardPost.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import server.MainProject007.audit.Auditable;
import server.MainProject007.boardComment.entity.BoardComment;
import server.MainProject007.member.entity.Member;

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
    private String boardTitle;

    @Column(nullable = false)
    private String boardContent;

    @Column(nullable = false)
    private String boardImgPath;

    @Column(nullable = false)
    private long boardViewCount;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;
/*
    @OneToMany(mappedBy = "boardPost", cascade = CascadeType.ALL)
    private List<BoardComment> boardComments = new ArrayList<>();
*/
    /*
    public void setMember(Member member){
        this.member = member;

        //등록된 member의 boardPostList가 해당 boardPost을 담고 있지 않다면
        //해당 boardPost 객체를 boardPostList에 추가한다
        if(!member.getBoardPosts().contains(this)){
            member.getBoardPosts().add(this);
        }
    }

     */
}
