package com.was_surf.domain.surf_spot.application;

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

    private SurfSpotRepository surfSpotRepository;

    public SurfSpotService(SurfSpotRepository surfSpotRepository) {
        this.surfSpotRepository = surfSpotRepository;
    }

    // 개별 조회
    public SurfSpot findSurfSpot(long surfSpotId) {
        return findVerifiedSurfSpot(surfSpotId);
    }

    // 전체 조회
    public Page<SurfSpot> findSurfSpots(int page, int size) {
        return surfSpotRepository.findAll(PageRequest.of(page, size));
    }

    // findVerifiedSurfSpot
    public SurfSpot findVerifiedSurfSpot(long surfSpotId) {
        Optional<SurfSpot> optionalSurfSpot = surfSpotRepository.findById(surfSpotId);
        SurfSpot findSurfSpot = optionalSurfSpot.orElseThrow(
                () -> new BusinessLogicException(ExceptionCode.REVIEW_NOT_FOUND)
        );

        return findSurfSpot;

    }
}
