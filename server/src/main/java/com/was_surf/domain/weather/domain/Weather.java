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

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long weatherId;

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

    @ManyToOne
    @JoinColumn(name = "SPOT_DATA_ID")
    private SpotData spotData;

    public void setSpotData(SpotData spotData) {
        this.spotData = spotData;
    }


    public Weather(String temp, String wave, String windSpeed, String highestTemperature, String minimumTemperature, String precipitation, String lastUpdateTime) {
        this.temp = temp;
        this.wave = wave;
        this.windSpeed = windSpeed;
        this.highestTemperature = highestTemperature;
        this.minimumTemperature = minimumTemperature;
        this.precipitation = precipitation;
        this.lastUpdateTime = lastUpdateTime;
    }
}
