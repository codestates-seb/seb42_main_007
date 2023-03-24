package com.was_surf.domain.board_comment.dto;

import lombok.*;

@Getter
@Builder
public class BoardCommentResponseDto {
    private long boardCommentId;

    private String comment;

//    private long boardPostId;

//    private long memberId;
}
