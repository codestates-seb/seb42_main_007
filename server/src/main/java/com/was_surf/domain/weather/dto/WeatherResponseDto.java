package com.was_surf.domain.weather.dto;

import com.was_surf.domain.weather.domain.Weather;
import lombok.Builder;
import lombok.Getter;

import javax.persistence.Column;

@Getter
@Builder
public class WeatherResponseDto {

    private Long weatherId;
    private String temp; //온도
    private String wave; //파고
    private String windSpeed; //풍속
    private Weather weather;
    private String message;
}