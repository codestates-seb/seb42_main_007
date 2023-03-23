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
        private String imgPath;
        private String name;
        private String address;
        private String viewCount;
    }
}
