package com.was_surf.domain.surf_spot.domain;

import com.was_surf.domain.spot_data.domain.SpotData;
import com.was_surf.domain.spot_review.domain.SpotReview;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Table(name = "SURF_SPOT")
@Getter
@Setter
@NoArgsConstructor
@Entity
public class SurfSpot {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long surfSpotId;

    // 조회수
    @Column(nullable = false)
    private int viewCount;

    @OneToMany(mappedBy = "surfSpot", cascade = CascadeType.ALL)
    private List<SpotReview> spotReviews = new ArrayList<>();

    @OneToOne
    @JoinColumn(name = "SPOT_DATA_ID")
    private SpotData spotData;

    public void setSpotData(SpotData spotData) {

        this.spotData = spotData;
    }

    public void addSpotReview(SpotReview spotReview) {
        spotReviews.add(spotReview);
        spotReview.setSurfSpot(this);
    }
}

