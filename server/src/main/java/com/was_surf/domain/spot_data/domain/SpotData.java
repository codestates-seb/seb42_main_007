package com.was_surf.domain.spot_data.domain;

import com.was_surf.domain.spot_review.domain.SpotReview;
import com.was_surf.domain.surf_spot.domain.SurfSpot;
import com.was_surf.domain.weather.domain.Region;
import com.was_surf.domain.weather.domain.Weather;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class SpotData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long spotDataId;

    @Column
    private int temp; //온도
    @Column
    private int tempScore;

    @Column
    private int wave; //파고
    @Column
    private int waveSore;

    @Column
    private int windSpeed; //풍속
    @Column
    private int windSpeedSore;

//    @OneToOne
//    @JoinColumn(name = "SURF_SPOT_ID")
//    private SurfSpot surfSpot;

    // region의 지역 정보 일대일 참조
//    @OneToOne
//    @JoinColumn(name = "region_id")
//    private Region region;
}
