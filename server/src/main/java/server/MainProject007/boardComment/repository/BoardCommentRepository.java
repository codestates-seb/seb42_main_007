package server.MainProject007.boardComment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import server.MainProject007.boardComment.entity.BoardComment;

public interface BoardCommentRepository extends JpaRepository<BoardComment, Long> {
}
