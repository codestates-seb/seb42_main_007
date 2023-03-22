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

    // 전체 조회2
    public Page<SurfSpot> findSurfSpots(int page, int size) {
        return surfSpotRepository.findAll(PageRequest.of(
                page, size, Sort.by("surfSpotId").descending()
        ));
    }

    /* => 💎개별 조회 {}랑 겹쳐서 에러남💎
    // 전체 조회1
    public Page<SurfSpot> findSurfSpots(String sortStatus, int page, int size) {

        switch (sortStatus) {
            // 최신순
            case "new":
                return surfSpotRepository.findAll(PageRequest.of(
                        page, size, Sort.by("surfSpotId").descending()
                ));

            // 오래된순
            case "old":
                return surfSpotRepository.findAll(PageRequest.of(
                        page, size, Sort.by("surfSpotId").ascending()
                ));
        }

        return null;
    }
    */


    // findVerifiedSurfSpot
    public SurfSpot findVerifiedSurfSpot(long surfSpotId) {
        Optional<SurfSpot> optionalSurfSpot = surfSpotRepository.findById(surfSpotId);
        SurfSpot findSurfSpot = optionalSurfSpot.orElseThrow(
                () -> new BusinessLogicException(ExceptionCode.REVIEW_NOT_FOUND)
        );

        return findSurfSpot;

    }
}
