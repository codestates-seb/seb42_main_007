package com.was_surf.boardComment.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import com.was_surf.boardComment.entity.BoardComment;
import com.was_surf.boardComment.repository.BoardCommentRepository;
import com.was_surf.exception.BusinessLogicException;
import com.was_surf.exception.ExceptionCode;

import java.util.Optional;

@Service
public class BoardCommentService {
    private BoardCommentRepository boardCommentRepository;

    public BoardCommentService(BoardCommentRepository boardCommentRepository) {
        this.boardCommentRepository = boardCommentRepository;
    }

    public BoardComment createBoardComment(BoardComment boardComment) {
        return boardCommentRepository.save(boardComment);
    }

    public BoardComment updateBoardComment(BoardComment boardComment) {
        BoardComment findBoardComment = findVerifiedBoardComment(boardComment.getBoardCommentId());

        Optional.ofNullable(boardComment.getComment())
                .ifPresent(findBoardComment::setComment);

        return boardCommentRepository.save(findBoardComment);
    }

    public BoardComment findBoardComment(long boardCommentId) {
        return findVerifiedBoardComment(boardCommentId);
    }

    public Page<BoardComment> findBoardComments(int page, int size) {
        return boardCommentRepository.findAll(PageRequest.of(page, size, Sort.by("boardCommentId").descending()));
    }

    public void deleteBoardComment(long boardCommentId) {
        BoardComment findBoardComment = findVerifiedBoardComment(boardCommentId);

        boardCommentRepository.delete(findBoardComment);
    }

    public BoardComment findVerifiedBoardComment(long boardCommentId) {
        Optional<BoardComment> optionalBoardComment = boardCommentRepository.findById(boardCommentId);
        BoardComment findBoardComment = optionalBoardComment.orElseThrow(() -> new BusinessLogicException(ExceptionCode.COMMENT_NOT_FOUND));

        return findBoardComment;
    }
}
