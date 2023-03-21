package com.was_surf.domain.surf_spot.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class SurfSpot {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long surfSpotId;

    @Column(nullable = false)
    private String spotImgPath;

    @Column(nullable = false)
    private String spotName;

    @Column(nullable = false)
    private String spotAddress;

    // 조회수
    @Column(nullable = false)
    private String spotViewCount;
}
