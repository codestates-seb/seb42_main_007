package com.was_surf.domain.weather.dto;

import com.was_surf.domain.weather.domain.Weather;
import lombok.Builder;
import lombok.Getter;

import javax.persistence.Column;

@Getter
@Builder
public class WeatherResponseDto {

    private Weather weather;
    private String message;
}