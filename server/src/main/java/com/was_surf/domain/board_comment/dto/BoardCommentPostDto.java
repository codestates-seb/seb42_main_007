package com.was_surf.domain.board_comment.dto;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BoardCommentPostDto {
    private long boardCommentId;

    private String comment;
}
