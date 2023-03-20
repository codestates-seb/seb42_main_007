package com.was_surf.domain.spot_review.repository;

import com.was_surf.domain.spot_review.domain.SpotReview;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SpotReviewRepository extends JpaRepository<SpotReview, Long> {
}
