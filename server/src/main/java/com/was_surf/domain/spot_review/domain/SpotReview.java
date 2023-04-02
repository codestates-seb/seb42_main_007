package com.was_surf.domain.spot_review.domain;

import com.was_surf.domain.member.domain.Member;
import com.was_surf.domain.surf_spot.domain.SurfSpot;
import com.was_surf.global.common.audit.Auditable;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class SpotReview extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long spotReviewId;

    // 별점: int 1 ~ 5 사이
    @NotNull
    @Column(nullable = false)
    private int rating;

    // 후기: 비어도 등록 가능
    private String review;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @ManyToOne
    @JoinColumn(name = "SURF_SPOT_ID")
    private SurfSpot surfSpot;

    public void setMember(Member member){
        this.member = member;

        //등록된 member의 spotReviewList가 해당 spotReview을 담고 있지 않다면
        //해당 spotReview 객체를 spotReviewList에 추가한다
        if(!member.getSpotReviews().contains(this)){
            member.getSpotReviews().add(this);
        }
    }

    public void setSurfSpot(SurfSpot surfSpot) {
        this.surfSpot = surfSpot;
    }
}
