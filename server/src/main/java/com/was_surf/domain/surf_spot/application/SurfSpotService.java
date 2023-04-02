package com.was_surf.domain.surf_spot.application;

import com.was_surf.domain.spot_review.domain.SpotReview;
import com.was_surf.domain.surf_spot.repository.SurfSpotRepository;
import com.was_surf.domain.surf_spot.domain.SurfSpot;
import com.was_surf.global.error.exception.BusinessLogicException;
import com.was_surf.global.error.exception.ExceptionCode;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class SurfSpotService {

    private final SurfSpotRepository surfSpotRepository;

    public SurfSpotService(SurfSpotRepository surfSpotRepository) {

        this.surfSpotRepository = surfSpotRepository;
    }

    // 개별 조회
    public SurfSpot findSurfSpot(long surfSpotId) {

        return findVerifiedSurfSpot(surfSpotId);
    }

    // 전체 조회
    public Page<SurfSpot> findSurfSpots(String status, int page, int size) {

        switch (status) {
//            // 최신순
//            case "new":
//                return surfSpotRepository.findAll(PageRequest.of(
//                        page, size, Sort.by("surfSpotId").descending()
//                ));
//
//            // 오래된순
//            case "old":
//                return surfSpotRepository.findAll(PageRequest.of(
//                        page, size, Sort.by("surfSpotId").ascending()
//                ));

            // 날씨 데이터 기반 추천순
            case "recommend":
                return surfSpotRepository.findAll(PageRequest.of(
                        page, size, Sort.by("spotData.totalScore").descending()
                ));

            // 평균별점순
            case "rating":
                return surfSpotRepository.findAll(PageRequest.of(
                        page, size, Sort.by("averageRating").descending()
                ));
        }

        return null;
    }



    // 스팟이 있는지 확인
    public SurfSpot findVerifiedSurfSpot(long surfSpotId) {
        Optional<SurfSpot> optionalSurfSpot = surfSpotRepository.findById(surfSpotId);
        SurfSpot findSurfSpot = optionalSurfSpot.orElseThrow(
                () -> new BusinessLogicException(ExceptionCode.SPOT_NOT_FOUND)
        );

        return findSurfSpot;

    }

    // 평균별점 계산
    public void calculateAverageRating(SurfSpot surfSpot) {
        List<SpotReview> reviews = surfSpot.getSpotReviews();

        int sum = 0;
        for (SpotReview review : reviews) {
            sum = sum + review.getRating();
        }

        int count = reviews.size();
        int average = count == 0 ? 0 : sum / count;

        surfSpot.setAverageRating(average);
    }

    // 조회수 1씩 카운트
    public SurfSpot updateViewCount(long surfSpotId) {
        Optional<SurfSpot> optionalSurfSpot = surfSpotRepository.findById(surfSpotId);
        if (optionalSurfSpot.isEmpty()) {
            throw new BusinessLogicException(ExceptionCode.SPOT_NOT_FOUND);
        }

        SurfSpot surfSpot = optionalSurfSpot.get();
        surfSpot.setViewCount(surfSpot.getViewCount() + 1);

        return surfSpotRepository.save(surfSpot);
    }
}
