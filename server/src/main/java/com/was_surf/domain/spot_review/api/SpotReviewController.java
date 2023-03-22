package com.was_surf.domain.spot_review.api;

import com.was_surf.domain.member.application.MemberService;
import com.was_surf.domain.member.domain.Member;
import com.was_surf.domain.spot_review.application.SpotReviewService;
import com.was_surf.domain.spot_review.domain.SpotReview;
import com.was_surf.domain.spot_review.dto.SpotReviewDto;
import com.was_surf.domain.spot_review.mapper.SpotReviewMapper;
import com.was_surf.global.common.response.MultiResponseDto;
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
public class SpotReviewController {

    private final SpotReviewService spotReviewService;
    private final SpotReviewMapper mapper;
    private final MemberService memberService;

    public SpotReviewController(SpotReviewService spotReviewService,
                                SpotReviewMapper mapper,
                                MemberService memberService) {
        this.spotReviewService = spotReviewService;
        this.mapper = mapper;
        this.memberService = memberService;
    }
    
    // 후기 등록
    @PostMapping
    public ResponseEntity postSpotReview(@RequestBody @Valid SpotReviewDto.Post postDto, Principal principal) {

        SpotReview spotReview = mapper.spotReviewPostDtoToSpotReview(postDto);

        // 회원 정보 검색
        Member member = memberService.findMemberToEmail(principal.getName());

        // 회원 정보 주입
        spotReview.setMember(member);
        SpotReview createdSpotReview = spotReviewService.createSpotReview(spotReview);
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
    @GetMapping
    public ResponseEntity getSpotReviews (@RequestParam @Positive int page,
                                          @RequestParam @Positive int size) {
        Page<SpotReview> pageSpotReviews = spotReviewService.findSpotReviews(page - 1,size);
        List<SpotReview> spotReviewList = pageSpotReviews.getContent();

        return new ResponseEntity<>(new MultiResponseDto<>(mapper.spotReviewsToSpotReviewResponseDtos(spotReviewList), pageSpotReviews), HttpStatus.OK);

    }

    // 후기 삭제
    @DeleteMapping("/{spot-review-id}")
    public ResponseEntity deleteSpotReview(@PathVariable("spot-review-id") Long spotReviewId) {
        spotReviewService.deleteSpotReview(spotReviewId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

}
