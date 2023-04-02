package com.was_surf.domain.board_post.repository;

import com.was_surf.domain.board_post.domain.BoardPost;
import com.was_surf.domain.member.domain.Member;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
public interface BoardPostRepository extends JpaRepository<BoardPost, Long> {
    Page<BoardPost> findAllByMember(Member member, PageRequest pageRequest);
}