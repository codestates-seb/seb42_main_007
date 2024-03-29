package com.was_surf.domain.weather.domain;

import com.was_surf.domain.member.domain.Member;
import com.was_surf.domain.spot_data.domain.SpotData;
import com.was_surf.domain.surf_spot.domain.SurfSpot;
import lombok.*;

import javax.persistence.*;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Embeddable
public class Weather {

    @Column(nullable = true)
    private String temp; //온도

    @Column(nullable = true)
    private String wave; //파고

    @Column(nullable = true)
    private String windSpeed; //풍속

    @Column(nullable = true)
    private String highestTemperature; // 일 최고기온

    @Column(nullable = true)
    private String minimumTemperature; // 일 최저기온

    @Column(nullable = true)
    private String precipitation; // 강수확률

    @Column(nullable = true)
    private String lastUpdateTime; // 마지막 갱신시각
}
