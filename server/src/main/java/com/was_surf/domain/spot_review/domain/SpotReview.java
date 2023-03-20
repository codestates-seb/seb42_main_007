package com.was_surf.domain.spot_review.domain;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class SpotReview {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long spotReviewId;

    // 별점: int 1 ~ 5 사이
    @Column(nullable = false)
    private int spotGrade;

    // 후기: 비어도 등록 가능
    @Column(nullable = false)
    private String review;
    
    // 최초 생성일
    // 최종 수정일 => extends 필요


//    @ManyToOne
//    @JoinColumn(name = "MEMBER_ID")
//    private Member member;

//    @ManyToOne
//    @JoinColumn(name = "SURF_SPOT_ID")
//    private SurfSpotId surfSpotId;

    /*
    public void setMember(Member member){
        this.member = member;

        //등록된 member의 spotReviewList가 해당 spotReview을 담고 있지 않다면
        //해당 spotReview 객체를 spotReviewList에 추가한다
        if(!member.getSpotReviews().contains(this)){
            member.getSpotReviews().add(this);
        }
    }

     */
}
