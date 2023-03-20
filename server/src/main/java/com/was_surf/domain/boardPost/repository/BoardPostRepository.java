package com.was_surf.domain.boardPost.repository;

import com.was_surf.domain.boardPost.domain.BoardPost;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardPostRepository extends JpaRepository<BoardPost, Long> {

}
