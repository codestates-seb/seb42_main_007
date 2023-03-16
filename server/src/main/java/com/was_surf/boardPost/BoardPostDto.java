package com.was_surf.boardPost;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

public class BoardPostDto {

    @Getter
    public static class Post {
        @NotBlank
        private String title;
        private String content;
        @NotBlank
        private String createdAt;
//        @Min(1)
//        private long memberId;
    }

    @Getter
    @Setter
    public static class Patch {
        private long boardPostId;
        private String title;
        private String content;
        @NotBlank
        private String updatedAt;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Response {
        private long boardPostId;
        private String title;
        private String content;
        private String email;
        private String displayName;
        private String createdAt;
        private String updatedAt;
    }
}
