package com.was_surf.domain.spot_review.repository;

import com.was_surf.domain.spot_review.domain.SpotReview;
import com.was_surf.domain.surf_spot.domain.SurfSpot;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SpotReviewRepository extends JpaRepository<SpotReview, Long> {
    Page<SpotReview> findAllBySurfSpot(SurfSpot surfSpot, PageRequest pageRequest);
}
