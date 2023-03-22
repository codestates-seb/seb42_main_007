package com.was_surf.domain.surf_spot.mapper;

import com.was_surf.domain.surf_spot.domain.SurfSpot;
import com.was_surf.domain.surf_spot.dto.SurfSpotDto;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface SurfSpotMapper {

    // entity -> responseDto
    SurfSpotDto.Response surfSpotToSurfSpotResponseDto(SurfSpot surfSpot);

    List<SurfSpotDto.Response> surfSpotsToSurfSpotResponseDtos(List<SurfSpot> response);
}
