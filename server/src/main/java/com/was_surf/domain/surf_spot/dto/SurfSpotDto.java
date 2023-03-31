package com.was_surf.domain.surf_spot.dto;

import com.was_surf.domain.spot_data.domain.SpotData;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

public class SurfSpotDto {

    @Getter
    @Setter
    @NoArgsConstructor
    public static class Response {
        private long surfSpotId;
        private String viewCount;
        private int totalScore;
    }
}
