package com.was_surf.domain.spot_review.application;

import com.was_surf.domain.member.application.MemberService;
import com.was_surf.domain.member.domain.Member;
import com.was_surf.domain.spot_review.domain.SpotReview;
import com.was_surf.domain.spot_review.dto.SpotReviewDto;
import com.was_surf.domain.spot_review.repository.SpotReviewRepository;
import com.was_surf.domain.surf_spot.application.SurfSpotService;
import com.was_surf.domain.surf_spot.domain.SurfSpot;
import com.was_surf.global.error.exception.BusinessLogicException;
import com.was_surf.global.error.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class SpotReviewService {
    private final SpotReviewRepository spotReviewRepository;
    private final MemberService memberService;
    private final SurfSpotService surfSpotService;


    // 후기 등록
    public SpotReview createSpotReview(SpotReview spotReview, String email, SpotReviewDto.Post postDto) {

        // 회원 정보 조회
        Member member = memberService.findMemberToEmail(email);
        SurfSpot surfSpot = surfSpotService.findSurfSpot(postDto.getSurfSpotId());

        // 회원 정보 주입
        spotReview.setMember(member);
        spotReview.setSurfSpot(surfSpot);

        SpotReview response = spotReviewRepository.save(spotReview);

        return response;
    }

    // 후기 수정
    public SpotReview updateSpotReview(SpotReview spotReview, String email) {

        // 회원 정보 조회
        Member member = memberService.findMemberToEmail(email);

        // 확인
        SpotReview existSpotReview = findVerifiedExistSpotReview(spotReview.getSpotReviewId());
        verifyMatchMember(existSpotReview, member);

        Optional.ofNullable(spotReview.getRating())
                .ifPresent(rating -> existSpotReview.setRating(rating));

        Optional.ofNullable(spotReview.getReview())
                .ifPresent(review -> existSpotReview.setReview(review));

        Optional.ofNullable(spotReview.getUpdatedAt())
                .ifPresent(updatedAt -> existSpotReview.setUpdatedAt(updatedAt));

        SpotReview response = spotReviewRepository.save(existSpotReview);

        return response;
    }

    // 후기 전체 조회
    public Page<SpotReview> findSpotReviews(int page, int size, SurfSpot surfSpot) {
        return spotReviewRepository.findAllBySurfSpot(surfSpot, PageRequest.of(
                page, size, Sort.by("spotReviewId").descending()
        ));
    }

    // 후기 삭제
    public void deleteSpotReview(long spotReviewId, String email) {

        // 회원 정보 조회
        Member member = memberService.findMemberToEmail(email);

        // 확인
        SpotReview existSpotReview = findVerifiedExistSpotReview(spotReviewId);
        verifyMatchMember(existSpotReview, member);

        spotReviewRepository.delete(existSpotReview);
    }

    // 기존에 존재하는지 확인
    public SpotReview findVerifiedExistSpotReview(long spotReviewId) {
        Optional<SpotReview> optionalSpotReview = spotReviewRepository.findById(spotReviewId);
        SpotReview existSpotReview = optionalSpotReview.orElseThrow(
                () -> new BusinessLogicException(ExceptionCode.REVIEW_NOT_FOUND)
        );

        return existSpotReview;
    }

    // 로그인된 정보가 접근 권한 있는지 확인
    public void verifyMatchMember(SpotReview spotReview, Member member) {
        long spotReviewHasMemberId = spotReview.getMember().getMemberId();
        long currentMemberId = member.getMemberId();

        if (spotReviewHasMemberId != currentMemberId || member.getRoles().contains("ADMIN")) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_MATCH);
        }
    }
}
