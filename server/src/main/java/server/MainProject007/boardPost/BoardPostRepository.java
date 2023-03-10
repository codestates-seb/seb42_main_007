package server.MainProject007.boardPost;

import server.MainProject007.boardPost.BoardPost;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardPostRepository extends JpaRepository<BoardPost, Long> {

}
