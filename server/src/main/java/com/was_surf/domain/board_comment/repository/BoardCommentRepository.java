package com.was_surf.domain.board_comment.repository;

import com.was_surf.domain.board_comment.domain.BoardComment;
import com.was_surf.domain.board_post.domain.BoardPost;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardCommentRepository extends JpaRepository<BoardComment, Long> {
    Page<BoardComment> findAllByBoardPost(BoardPost boardPost, PageRequest pageRequest);
}
