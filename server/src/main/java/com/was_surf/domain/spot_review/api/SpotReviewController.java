package com.was_surf.domain.spot_review.api;

import com.was_surf.domain.spot_review.application.SpotReviewService;
import com.was_surf.domain.spot_review.domain.SpotReview;
import com.was_surf.domain.spot_review.dto.SpotReviewDto;
import com.was_surf.domain.spot_review.mapper.SpotReviewMapper;
import com.was_surf.global.common.response.MultiResponseEntity;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/spot-reviews")
@Slf4j
@Validated
public class SpotReviewController {

    private final SpotReviewService spotReviewService;
    private final SpotReviewMapper mapper;

    public SpotReviewController(SpotReviewService spotReviewService,
                                SpotReviewMapper mapper) {
        this.spotReviewService = spotReviewService;
        this.mapper = mapper;
    }
    
    // 후기 등록
    @PostMapping
    public ResponseEntity postSpotReview(@RequestBody @Valid SpotReviewDto.Post postDto) {

        SpotReview createdSpotReview = spotReviewService.createSpotReview(mapper.spotReviewPostDtoToSpotReview(postDto));
        SpotReviewDto.Response response = mapper.spotReviewToSpotReviewResponseDto(createdSpotReview);

        return ResponseEntity.ok().build();
    }

    // 후기 수정
    @PatchMapping("/{spot-review-id}")
    public ResponseEntity patchSpotReview(@RequestBody SpotReviewDto.Patch patchDto,
                                          @PathVariable("spot-review-id") Long spotReviewId) {
        patchDto.setSpotReviewId(spotReviewId);
        SpotReview updatedSpotReview = spotReviewService.updateSpotReview(mapper.spotReviewPatchDtoToSpotReview(patchDto));
        SpotReviewDto.Response response = mapper.spotReviewToSpotReviewResponseDto(updatedSpotReview);

        return ResponseEntity.ok().build();
    }

    // 후기 전체 조회: 페이지네이션
    @GetMapping("/{sort-status}")
    public ResponseEntity getSpotReviews (@PathVariable("sort-status") String sortStatus, @RequestParam int page,
                                          @RequestParam @Positive int size) {
        Page<SpotReview> pageSpotReviews = spotReviewService.findSpotReviews(sortStatus, page - 1,size);
        List<SpotReview> spotReviewList = pageSpotReviews.getContent();

        return new ResponseEntity<>(new MultiResponseEntity<>(mapper.spotReviewsToSpotReviewResponseDtos(spotReviewList), pageSpotReviews), HttpStatus.OK);

    }

    // 후기 삭제
    @DeleteMapping("/{spot-review-id}")
    public ResponseEntity deleteSpotReview(@PathVariable("spot-review-id") Long spotReviewId) {
        spotReviewService.deleteSpotReview(spotReviewId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
