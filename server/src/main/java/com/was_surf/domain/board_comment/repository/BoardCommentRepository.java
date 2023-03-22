package com.was_surf.domain.board_comment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.was_surf.domain.board_comment.domain.BoardComment;

public interface BoardCommentRepository extends JpaRepository<BoardComment, Long> {
}
