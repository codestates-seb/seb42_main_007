package com.was_surf.domain.spot_review.api;

import com.was_surf.domain.member.application.MemberService;
import com.was_surf.domain.member.domain.Member;
import com.was_surf.domain.spot_review.application.SpotReviewService;
import com.was_surf.domain.spot_review.domain.SpotReview;
import com.was_surf.domain.spot_review.dto.SpotReviewDto;
import com.was_surf.domain.spot_review.mapper.SpotReviewMapper;
import com.was_surf.domain.surf_spot.application.SurfSpotService;
import com.was_surf.domain.surf_spot.domain.SurfSpot;
import com.was_surf.global.common.response.MultiResponseDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/spot-reviews")
@Slf4j
@Validated
@RequiredArgsConstructor
public class SpotReviewController {

    private final SpotReviewService spotReviewService;
    private final SpotReviewMapper mapper;
    private final MemberService memberService;
    private final SurfSpotService surfSpotService;


    // 후기 등록
    @PostMapping
    public ResponseEntity postSpotReview(@RequestBody @Valid SpotReviewDto.Post postDto, Principal principal) {

        SpotReview spotReview = mapper.spotReviewPostDtoToSpotReview(postDto);

        SpotReview createdSpotReview = spotReviewService.createSpotReview(spotReview, principal.getName(), postDto);
        SpotReviewDto.Response response = mapper.spotReviewToSpotReviewResponseDto(createdSpotReview);

        return ResponseEntity.ok().build();
    }

    // 후기 수정
    @PatchMapping("/{spot-review-id}")
    public ResponseEntity patchSpotReview(@RequestBody SpotReviewDto.Patch patchDto,
                                          @PathVariable("spot-review-id") long spotReviewId,
                                          Principal principal) {

        patchDto.setSpotReviewId(spotReviewId);

        SpotReview updatedSpotReview = spotReviewService.updateSpotReview(mapper.spotReviewPatchDtoToSpotReview(patchDto), principal.getName());
        SpotReviewDto.Response response = mapper.spotReviewToSpotReviewResponseDto(updatedSpotReview);

        return ResponseEntity.ok().build();
    }

    // 후기 전체 조회: 페이지네이션
    @GetMapping
    public ResponseEntity getSpotReviews (@RequestParam @Positive int page,
                                          @RequestParam @Positive int size,
                                          @RequestParam long surfSpotId) {

        SurfSpot surfSpot = surfSpotService.findSurfSpot(surfSpotId);

        Page<SpotReview> pageSpotReviews = spotReviewService.findSpotReviews(page - 1,size, surfSpot);
        List<SpotReview> spotReviewList = pageSpotReviews.getContent();

        return new ResponseEntity<>(new MultiResponseDto<>(mapper.spotReviewsToSpotReviewResponseDtos(spotReviewList), pageSpotReviews), HttpStatus.OK);

    }

    // 후기 삭제
    @DeleteMapping("/{spot-review-id}")
    public ResponseEntity deleteSpotReview(@PathVariable("spot-review-id") long spotReviewId,
                                           Principal principal) {
        spotReviewService.deleteSpotReview(spotReviewId, principal.getName());

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
