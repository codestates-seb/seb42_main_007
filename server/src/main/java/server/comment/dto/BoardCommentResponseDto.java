package server.MainProject007.comment.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BoardCommentResponseDto {
    private long boardCommentId;

    private String comment;

//    private long boardPostId;

//    private long memberId;
}
