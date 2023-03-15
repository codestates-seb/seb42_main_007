package server.MainProject007.boardPost.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

public class BoardPostDto {

    @Getter
    public static class Post {
        @NotBlank
        private String boardTitle;
        private String boardContent;
        @NotBlank
        private LocalDateTime createdAt;
        private String boardImgPath;
        @Min(1)
        private long memberId;
    }

    @Getter
    @Setter
    public static class Patch {
        private long boardPostId;
        private String boardTitle;
        private String boardContent;
        @NotBlank
        private LocalDateTime updatedAt;
        private String boardImgPath;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Response {
        private long boardPostId;
        private String boardTitle;
        private String boardContent;
        private String email;
        private String displayName;
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;
        private String boardImgPath;
        private long boardViewCount;
    }
}
