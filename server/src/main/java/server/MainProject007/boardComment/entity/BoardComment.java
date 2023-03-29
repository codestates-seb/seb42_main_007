package server.MainProject007.boardComment.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import server.MainProject007.audit.Auditable;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;

@Getter
@Setter
@NoArgsConstructor
@Entity(name = "BOARD_COMMENT")
public class BoardComment extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long boardCommentId;

    @NotBlank
    private String comment;

//    @ManyToOne
//    @Column(name = "BOARD_POST_ID", nullable = false)
//    private BoardPost boardPost;

//    public setBoardPost(BoardPost boardPost) {
//        this.boardPost = boardPost;
//        if(boardPost.getBoardComment().contains(this)) {
//            boardPost.getBoardComment().add(this);
//        }
//    }

//    @ManyToOne
//    @Column(name = "MEMBER_ID", nullable = false)
//    private Member member;

//    public setBoardPost(Member member) {
//        this.member = member;
//        if(member.getBoardComment().contains(this)) {
//            member.getBoardComment().add(this);
//        }
//    }
}
