package com.was_surf.domain.boardComment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.was_surf.domain.boardComment.domain.BoardComment;

public interface BoardCommentRepository extends JpaRepository<BoardComment, Long> {
}
