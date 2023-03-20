package com.was_surf.domain.spot_review.mapper;

import com.was_surf.domain.spot_review.domain.SpotReview;
import com.was_surf.domain.spot_review.dto.SpotReviewDto;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface SpotReviewMapper {

    // postDto -> entity
    SpotReview spotReviewPostDtoToSpotReview(SpotReviewDto.Post spotReviewPost);

    // patchDto -> entity
    SpotReview spotReviewPatchDtoToSpotReview(SpotReviewDto.Patch spotReviewPatch);

    // entity -> responseDto
    SpotReviewDto.Response spotReviewToSpotReviewResponseDto(SpotReview spotReview);

    List<SpotReviewDto.Response> spotReviewsToSpotReviewResponseDtos(List<SpotReview> response);
}
