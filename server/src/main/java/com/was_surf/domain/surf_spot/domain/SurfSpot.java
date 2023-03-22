package com.was_surf.domain.surf_spot.domain;

import com.was_surf.domain.spot_review.domain.SpotReview;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

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
    private String viewCount;

    @OneToMany(mappedBy = "surfSpot", cascade = CascadeType.ALL)
    private List<SpotReview> spotReviews = new ArrayList<>();
}
