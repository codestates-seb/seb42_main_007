package com.was_surf.domain.spot_data.api;

import com.was_surf.domain.board_post.domain.BoardPost;
import com.was_surf.domain.board_post.dto.BoardPostDto;
import com.was_surf.domain.spot_data.application.SpotDataService;
import com.was_surf.domain.spot_data.domain.SpotData;
import com.was_surf.global.common.response.SingleResponseDto;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

public class SpotDataCotroller {

//    private final SpotDataService spotDataService;
//    private final SpotDataMapper mapper;
//
//
//    // 스팟 데이터 개별 조회
//    @GetMapping("/{spot-data-id}")
//    public ResponseEntity getSpotData(@PathVariable("spot-data-id") long spotDataId) {
//
//        SpotData foundSpotData = spotDataService.findSpotData(spotDataId);
//        SpotDataDto.Response response = mapper.spotDataToSpotDataResponseDto(foundSpotData);
//
//        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK);
//    }

}
