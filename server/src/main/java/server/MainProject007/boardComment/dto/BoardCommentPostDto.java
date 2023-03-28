package server.MainProject007.boardComment.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BoardCommentPostDto {
    private long boardCommentId;

    private String comment;
}
