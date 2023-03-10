package server.MainProject007.comment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import server.MainProject007.comment.entity.BoardComment;

public interface BoardCommentRepository extends JpaRepository<BoardComment, Long> {
}
