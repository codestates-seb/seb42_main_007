package com.was_surf.domain.surf_spot.api;

import com.was_surf.domain.surf_spot.application.SurfSpotService;
import com.was_surf.domain.surf_spot.domain.SurfSpot;
import com.was_surf.domain.surf_spot.dto.SurfSpotDto;
import com.was_surf.domain.surf_spot.mapper.SurfSpotMapper;
import com.was_surf.global.common.response.MultiResponseDto;
import com.was_surf.global.common.response.SingleResponseDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/surf-spots")
@Slf4j
@Validated
public class SurfSpotController {

    private final SurfSpotService surfSpotService;
    private final SurfSpotMapper mapper;

    // 스팟 개별 조회
    @GetMapping("/{surf-spot-id}")
    public ResponseEntity getSurfSpot(@PathVariable("surf-spot-id") Long surfSpotId) {

        SurfSpot findSurfSpot = surfSpotService.findSurfSpot(surfSpotId);
        SurfSpotDto.Response response = mapper.surfSpotToSurfSpotResponseDto(findSurfSpot);

        // 조회수 증가
        surfSpotService.updateViewCount(surfSpotId);

        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    // 스팟 전체 조회2
    @GetMapping
    public ResponseEntity getSurfSpots (@RequestParam @Positive int page,
                                          @RequestParam @Positive int size,
                                        @RequestParam String status) {
        Page<SurfSpot> pageSurfSpots = surfSpotService.findSurfSpots(status,page - 1,size);
        List<SurfSpot> surfSpotList = pageSurfSpots.getContent();

        return new ResponseEntity<>(new MultiResponseDto<>(mapper.surfSpotsToSurfSpotResponseDtos(surfSpotList), pageSurfSpots), HttpStatus.OK);

    }
}
