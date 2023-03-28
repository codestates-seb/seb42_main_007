package com.was_surf.domain.weather.repository;

import com.was_surf.domain.weather.domain.Region;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegionRepository extends JpaRepository<Region, Long> {
}
