package com.was_surf.domain.weather.domain;

import com.was_surf.domain.spot_data.domain.SpotData;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.*;

@Getter
@Entity
@NoArgsConstructor
@Table(name = "REGION")
public class Region {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long regionId; // 지역 순번

    @Column(nullable = false)
    private String regionParent; // 시, 도

    @Column(nullable = false)
    private String regionChild; // 시, 군, 구

    @Column(nullable = false)
    private int nx; // x좌표

    @Column(nullable = false)
    private int ny; // y좌표

    @Embedded
    private Weather weather; // 지역 날씨 정보

    @OneToOne(mappedBy = "region")
    private SpotData spotData;

    // 날씨 갱신
    public void updateRegionWeather(Weather weather) {
        this.weather = weather;
    }

    @Override
    public String toString() {
        return regionParent + " " + regionChild;
    }
}

