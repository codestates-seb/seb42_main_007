package com.was_surf.boardComment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.was_surf.boardComment.entity.BoardComment;

public interface BoardCommentRepository extends JpaRepository<BoardComment, Long> {
}
