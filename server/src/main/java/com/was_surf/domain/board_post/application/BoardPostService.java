package com.was_surf.domain.board_post.application;

import com.was_surf.domain.board_post.domain.BoardPost;
import com.was_surf.domain.board_post.repository.BoardPostRepository;
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

    public BoardPostService(BoardPostRepository boardPostRepository) {
        this.boardPostRepository = boardPostRepository;
    }

    // 등록
    public BoardPost createBoardPost(BoardPost boardPost) {
        BoardPost response = boardPostRepository.save(boardPost);
        return response;
    }

    // 수정
    public BoardPost updateBoardPost(BoardPost boardPost) {
        BoardPost existBoardPost = findVerifiedExistBoardPost(boardPost.getBoardPostId());

        Optional.ofNullable(boardPost.getBoardTitle())
                .ifPresent(boardTitle -> existBoardPost.setBoardTitle(boardTitle));

        Optional.ofNullable(boardPost.getBoardContent())
                .ifPresent(boardContent -> existBoardPost.setBoardContent(boardContent));

//        Optional.ofNullable(boardPost.getUpdatedAt())
//                .ifPresent(updatedAt -> existBoardPost.setUpdatedAt(updatedAt));

        Optional.ofNullable(boardPost.getBoardImgPath())
                .ifPresent(boardImgPath -> existBoardPost.setBoardImgPath(boardImgPath));

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
    public void deleteBoardPost(long boardPostId) {
        BoardPost existBoardPost = findVerifiedExistBoardPost(boardPostId);
        boardPostRepository.delete(existBoardPost);
    }


    // findVerifiedExistBoardPost
    public BoardPost findVerifiedExistBoardPost(long boardPostId) {
        Optional<BoardPost> optionalBoardPost = boardPostRepository.findById(boardPostId);
        BoardPost existBoardPost = optionalBoardPost.orElseThrow(
                () -> new BusinessLogicException(ExceptionCode.POST_NOT_FOUND)
        );

        return existBoardPost;
    }
}