package com.was_surf.domain.surf_spot.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class SurfSpotDto {

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Response {
        private long surfSpotId;
        private String spotImgPath;
        private String spotName;
        private String spotAddress;
        private String spotViewCount;
    }
}
