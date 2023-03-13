package server.MainProject007.boardPost.repository;

import server.MainProject007.boardPost.entity.BoardPost;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardPostRepository extends JpaRepository<BoardPost, Long> {

}
