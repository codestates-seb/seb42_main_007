package com.was_surf.domain.board_comment.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

public class BoardCommentDto {
    @Getter
    public static class Post {
        private long boardPostId;
        private String comment;
    }

    @Getter
    @Setter
    public static class Patch {
        private long boardCommentId;
        private String comment;
    }

    @Getter
    @Builder
    public static class Response {
        private long boardCommentId;
        private String comment;
        private long boardPostId;
        private long displayName;
    }
}
