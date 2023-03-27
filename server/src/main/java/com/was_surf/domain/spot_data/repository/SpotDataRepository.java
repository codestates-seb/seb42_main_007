package com.was_surf.domain.spot_data.repository;

import com.was_surf.domain.spot_data.domain.SpotData;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SpotDataRepository extends JpaRepository<SpotData, Long> {
}
