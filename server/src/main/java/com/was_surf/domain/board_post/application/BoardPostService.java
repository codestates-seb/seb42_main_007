package com.was_surf.domain.board_post.application;

import com.was_surf.domain.board_post.domain.BoardPost;
import com.was_surf.domain.board_post.repository.BoardPostRepository;
import com.was_surf.domain.member.application.MemberService;
import com.was_surf.domain.member.domain.Member;
import com.was_surf.global.error.exception.BusinessLogicException;
import com.was_surf.global.error.exception.ExceptionCode;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
public class BoardPostService {
    private final BoardPostRepository boardPostRepository;
    private final MemberService memberService;

    public BoardPostService(BoardPostRepository boardPostRepository, MemberService memberService) {

        this.boardPostRepository = boardPostRepository;
        this.memberService = memberService;
    }

    // 등록
    public BoardPost createBoardPost(BoardPost boardPost, String email) {

        // 회원 정보 조회
        Member member = memberService.findMemberToEmail(email);

        // 회원 정보 주입
        boardPost.setMember(member);

        BoardPost response = boardPostRepository.save(boardPost);

        return response;
    }

    // 수정
    public BoardPost updateBoardPost(BoardPost boardPost, String email) {

        // 회원 정보 조회
        Member member = memberService.findMemberToEmail(email);

        BoardPost existBoardPost = findVerifiedExistBoardPost(boardPost.getBoardPostId());

        Optional.ofNullable(boardPost.getTitle())
                .ifPresent(title -> existBoardPost.setTitle(title));

        Optional.ofNullable(boardPost.getContent())
                .ifPresent(content -> existBoardPost.setContent(content));

        Optional.ofNullable(boardPost.getUpdatedAt())
                .ifPresent(updatedAt -> existBoardPost.setUpdatedAt(updatedAt));

        Optional.ofNullable(boardPost.getImgPath())
                .ifPresent(imgPath -> existBoardPost.setImgPath(imgPath));


        BoardPost response = boardPostRepository.save(existBoardPost);

        return response;
    }

    // 검색 조회
    public BoardPost findBoardPost(long boardPostId) {
        BoardPost response = findVerifiedExistBoardPost(boardPostId);

        return response;
    }

    // 전체 조회
    public Page<BoardPost> findBoardPosts(int page, int size) {
        return boardPostRepository.findAll(PageRequest.of(
                page, size, Sort.by("boardPostId").descending()
        ));
    }

    // 삭제
    public void deleteBoardPost(long boardPostId, String email) {
        // 회원 정보 조회
        Member member = memberService.findMemberToEmail(email);

        BoardPost existBoardPost = findVerifiedExistBoardPost(boardPostId);
        boardPostRepository.delete(existBoardPost);
    }


    // 기존에 존재하는지 확인
    public BoardPost findVerifiedExistBoardPost(long boardPostId) {
        Optional<BoardPost> optionalBoardPost = boardPostRepository.findById(boardPostId);
        BoardPost existBoardPost = optionalBoardPost.orElseThrow(
                () -> new BusinessLogicException(ExceptionCode.POST_NOT_FOUND)
        );

        return existBoardPost;
    }

    // 로그인된 정보가 접근 권한 있는지 확인
    public void verifyMatchMember(BoardPost boardPost, Member member) {
        long boardPostHasMemberId = boardPost.getMember().getMemberId();
        long currentMemberId = member.getMemberId();

        if (!(boardPostHasMemberId == currentMemberId) || (member.getRoles().toString().equals("USER") && member.getRoles().toString().equals("ADMIN"))) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_MATCH);
        }
    }
}