package com.was_surf.domain.board_post.repository;

import com.was_surf.domain.board_post.domain.BoardPost;
import org.springframework.data.jpa.repository.JpaRepository;
public interface BoardPostRepository extends JpaRepository<BoardPost, Long> {

}