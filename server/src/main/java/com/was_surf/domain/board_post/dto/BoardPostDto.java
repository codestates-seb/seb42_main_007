package com.was_surf.domain.board_post.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

public class BoardPostDto {

    @Getter
    public static class Post {
        private String title;
        private String content;
        private LocalDateTime createdAt;
        private String imgPath;
        private long memberId;
    }

    @Getter
    public static class Patch {
        @Setter
        private long boardPostId;
        private String title;
        private String content;
        private LocalDateTime updatedAt;
        private String imgPath;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Response {
        private long boardPostId;
        private String title;
        private String content;
        private long memberId;
        private String email;
        private String displayName;
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;
        private String imgPath;
        private long viewCount;
    }
}