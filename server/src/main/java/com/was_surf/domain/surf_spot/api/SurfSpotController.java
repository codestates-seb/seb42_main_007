package com.was_surf.domain.surf_spot.api;

import com.was_surf.domain.surf_spot.application.SurfSpotService;
import com.was_surf.domain.surf_spot.domain.SurfSpot;
import com.was_surf.domain.surf_spot.mapper.SurfSpotMapper;
import com.was_surf.global.common.response.MultiResponseDto;
import com.was_surf.global.common.response.SingleResponseDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/surf-spots")
@Slf4j
@Validated
public class SurfSpotController {

    private final SurfSpotService surfSpotService;
    private final SurfSpotMapper mapper;

    public SurfSpotController(SurfSpotService surfSpotService,
                              SurfSpotMapper mapper) {
        this.surfSpotService = surfSpotService;
        this.mapper = mapper;
    }

    // 스팟 개별 조회
    @GetMapping("/{surf-spot-id}")
    public ResponseEntity getSurfSpot(@PathVariable("surf-spot-id") @Positive long surfSpotId) {
        SurfSpot findSurfSpot = surfSpotService.findSurfSpot(surfSpotId);

        return new ResponseEntity<>(new SingleResponseDto<>(mapper.surfSpotToSurfSpotResponseDto(findSurfSpot)), HttpStatus.OK);
    }

    // 스팟 전체 조회
    @GetMapping
    public ResponseEntity getSurfSpots(@Positive @RequestParam int page,
                                       @Positive @RequestParam int size) {
        Page<SurfSpot> pageSurfSpots = surfSpotService.findSurfSpots(page - 1, size);
        List<SurfSpot> listSurfSpots = pageSurfSpots.getContent();

        return new ResponseEntity<>(new MultiResponseDto<>(mapper.surfSpotsToSurfSpotResponseDtos(listSurfSpots), pageSurfSpots), HttpStatus.OK);
    }
}
