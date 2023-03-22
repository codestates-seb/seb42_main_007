package com.was_surf.domain.spot_review.application;

import com.was_surf.domain.spot_review.domain.SpotReview;
import com.was_surf.domain.spot_review.repository.SpotReviewRepository;
import com.was_surf.global.error.exception.BusinessLogicException;
import com.was_surf.global.error.exception.ExceptionCode;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
public class SpotReviewService {
    private final SpotReviewRepository spotReviewRepository;

    public SpotReviewService(SpotReviewRepository spotReviewRepository) {
        this.spotReviewRepository = spotReviewRepository;
    }

    // 후기 등록
    public SpotReview createSpotReview(SpotReview spotReview) {

        SpotReview response = spotReviewRepository.save(spotReview);

        return response;
    }

    // 후기 수정
    public SpotReview updateSpotReview(SpotReview spotReview) {

        SpotReview existSpotReview = findVerifiedExistSpotReview(spotReview.getSpotReviewId());

        Optional.ofNullable(spotReview.getSpotGrade())
                .ifPresent(spotGrade -> existSpotReview.setSpotGrade(spotGrade));

        Optional.ofNullable(spotReview.getReview())
                .ifPresent(review -> existSpotReview.setReview(review));

        Optional.ofNullable(spotReview.getUpdatedAt())
                .ifPresent(updatedAt -> existSpotReview.setUpdatedAt(updatedAt));

        SpotReview response = spotReviewRepository.save(existSpotReview);

        return response;
    }

    // 후기 전체 조회
    public Page<SpotReview> findSpotReviews(int page, int size) {
        return spotReviewRepository.findAll(PageRequest.of(
                page, size, Sort.by("spotReviewId").descending()
        ));
    }

    // 후기 삭제
    public void deleteSpotReview(long spotReviewId) {

        SpotReview existSpotReview = findVerifiedExistSpotReview(spotReviewId);
        spotReviewRepository.delete(existSpotReview);
    }

    // findVerifiedExistSpotReview
    public SpotReview findVerifiedExistSpotReview(long spotReviewId) {

        Optional<SpotReview> optionalSpotReview = spotReviewRepository.findById(spotReviewId);
        SpotReview existSpotReview = optionalSpotReview.orElseThrow(
                () -> new BusinessLogicException(ExceptionCode.REVIEW_NOT_FOUND)
        );

        return existSpotReview;
    }
}
