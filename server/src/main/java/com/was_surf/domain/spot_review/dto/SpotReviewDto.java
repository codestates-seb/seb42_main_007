package com.was_surf.domain.spot_review.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

public class SpotReviewDto {

    @Getter
    public static class Post {
        @NotBlank
        private int spotGrade;
        private String review;
        private LocalDateTime createdAt;
//        private long memberId;
//        private long surfSpotId;
    }

    @Getter
    @Setter
    public static class Patch {
        private long spotReviewId;
        private int spotGrade;
        private String review;
        private LocalDateTime updatedAt;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Response {
        private long spotReviewId;
        private int spotGrade;
        private String review;
        private String email;
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;
    }
}
