package com.was_surf.domain.board_comment.application;

import com.was_surf.domain.board_comment.domain.BoardComment;
import com.was_surf.domain.board_comment.repository.BoardCommentRepository;
import com.was_surf.domain.board_post.application.BoardPostService;
import com.was_surf.domain.board_post.domain.BoardPost;
import com.was_surf.domain.member.application.MemberService;
import com.was_surf.domain.member.domain.Member;
import com.was_surf.global.error.exception.BusinessLogicException;
import com.was_surf.global.error.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Slf4j
public class BoardCommentService {
    private final BoardCommentRepository boardCommentRepository;
    private final MemberService memberService;
    private final BoardPostService boardPostService;

    public BoardComment createBoardComment(BoardComment boardComment, String email) {
        log.info("# createBoardComment");

        // 현재 로그인된 회원 정보 조회
        Member findMember = memberService.findMemberToEmail(email);

        // 게시글 조회
        BoardPost findBoardPost = boardPostService.findBoardPost(boardComment.getBoardPost().getBoardPostId());

        boardComment.setMember(findMember);
        boardComment.setBoardPost(findBoardPost);

        return boardCommentRepository.save(boardComment);
    }

    public BoardComment updateBoardComment(BoardComment boardComment, String email) {
        log.info("# updateBoardComment");

        // 현재 로그인된 회원 정보 조회
        Member findMember = memberService.findMemberToEmail(email);

        // 댓글 조회
        BoardComment findBoardComment = findVerifiedBoardComment(boardComment.getBoardCommentId());

        verifyMatchMember(boardComment, findMember);

        findBoardComment.updateBoardComment(boardComment);

        return boardCommentRepository.save(findBoardComment);
    }

    public Page<BoardComment> findBoardComments(int page, int size, long boardPostId) {
        BoardPost findBoardPost = boardPostService.findBoardPost(boardPostId);

        return boardCommentRepository.findAllByBoardPost(findBoardPost, PageRequest.of(page, size, Sort.by("boardCommentId").ascending()));
    }

    public void deleteBoardComment(long boardCommentId, String email) {
        log.info("# deleteBoardComment");

        // 현재 로그인된 회원 정보 조회
        Member findMember = memberService.findMemberToEmail(email);

        BoardComment findBoardComment = findVerifiedBoardComment(boardCommentId);

        verifyMatchMember(findBoardComment, findMember);

        boardCommentRepository.delete(findBoardComment);
    }

    public BoardComment findVerifiedBoardComment(long boardCommentId) {
        Optional<BoardComment> optionalBoardComment = boardCommentRepository.findById(boardCommentId);
        BoardComment findBoardComment = optionalBoardComment.orElseThrow(() -> new BusinessLogicException(ExceptionCode.COMMENT_NOT_FOUND));

        return findBoardComment;
    }

    public void verifyMatchMember(BoardComment boardComment, Member member) {
        long boardCommentHasMemberId = boardComment.getMember().getMemberId();
        long currentMemberId = member.getMemberId();

        // 작성자 계정 또는 관리자 계정인지 확인
        if(boardCommentHasMemberId != currentMemberId || member.getRoles().contains("ADMIN")) {
            // 아닐 경우 에러 발생
            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_MATCH);
        }
    }
}
