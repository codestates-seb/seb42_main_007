package com.was_surf.domain.spot_data.domain;

import com.was_surf.domain.surf_spot.domain.SurfSpot;
import com.was_surf.domain.weather.domain.Region;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class SpotData {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long spotDataId;
    
    // 온도점수
    @Column
    private Integer tempScore;

    // 파고점수
    @Column
    private Integer waveScore;

    // 풍속점수
    @Column
    private Integer windSpeedScore;

    // 합계
    @Column
    private Integer totalScore;

    @OneToOne(mappedBy = "spotData")
    private SurfSpot surfSpot;

    // region의 지역 정보 일대일 참조
    @OneToOne
    @JoinColumn(name = "region_id")
    private Region region;

    public void setRegion(Region region) {
        this.region = region;
    }

    public void sumScore() {
        this.totalScore = this.tempScore + this.waveScore + this.windSpeedScore;
    }
}
