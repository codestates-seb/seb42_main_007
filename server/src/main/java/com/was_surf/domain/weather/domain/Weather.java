package com.was_surf.domain.weather.domain;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Embeddable
public class Weather {

    @Column(nullable = true)
    private double temp; //온도

    @Column(nullable = true)
    private double wave; //파고

    @Column(nullable = true)
    private double windSpeed; //풍속

    @Column(nullable = true)
    private String lastUpdateTime; // 마지막 갱신시각
}
