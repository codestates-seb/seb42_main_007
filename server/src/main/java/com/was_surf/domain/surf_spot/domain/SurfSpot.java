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

//    @Column(nullable = false)
//    private String imgPath;
//
//    @Column(nullable = false)
//    private String name;
//
//    @Column(nullable = false)
//    private String address;

    // 조회수
    @Column(nullable = false)
    private int viewCount;

    // 평균별점
    @Column(nullable = false)
    private int averageRating;

    @OneToMany(mappedBy = "surfSpot", cascade = CascadeType.ALL)
    private List<SpotReview> spotReviews = new ArrayList<>();

    @OneToOne
    @JoinColumn(name = "SPOT_DATA_ID")
    private SpotData spotData;

    public void setSpotData(SpotData spotData) {

        this.spotData = spotData;
    }
}

