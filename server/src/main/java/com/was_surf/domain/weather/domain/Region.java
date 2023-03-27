package com.was_surf.domain.weather.domain;

import com.was_surf.domain.spot_data.domain.SpotData;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Entity
@NoArgsConstructor
public class Region {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; // 지역 순번

    @Column(name = "region_parent")
    private String parentRegion; // 시, 도

    @Column(name = "region_child")
    private String childRegion; // 시, 군, 구

    @Column(name = "nx")
    private int nx; // x좌표

    @Column(name = "ny")
    private int ny; // y좌표

    @Embedded
    private Weather weather; // 지역 날씨 정보

//    @OneToOne(mappedBy = "region") // spotData에 지역-날씨 데이터 제공
//    private SpotData spotData;

    // 날씨 정보 제외하고 지역 생성
    public Region(Long id, String parentRegion, String childRegion, int nx, int ny) {
        this.id = id;
        this.parentRegion = parentRegion;
        this.childRegion = childRegion;
        this.nx = nx;
        this.ny = ny;
    }

    // 날씨 갱신
    public void updateRegionWeather(Weather weather) {
        this.weather = weather;
    }

    @Override
    public String toString() {
        return parentRegion + " " + childRegion;
    }
}

