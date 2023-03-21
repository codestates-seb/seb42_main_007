package com.was_surf.domain.board_post.mapper;

import com.was_surf.domain.board_post.dto.BoardPostDto;
import com.was_surf.domain.board_post.domain.BoardPost;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface BoardPostMapper {

    // postDto -> entity
    BoardPost boardPostPostDtoToBoardPost(BoardPostDto.Post boardPostPost);

    // patchDto -> entity
    BoardPost boardPostPatchDtoToBoardPost(BoardPostDto.Patch boardPostPatch);

    // entity -> responseDto
    @Mapping(source = "member.memberId", target = "memberId")
    @Mapping(source = "member.displayName", target = "displayName")
    @Mapping(source = "member.email", target = "email")
    BoardPostDto.Response boardPostToBoardPostResponseDto(BoardPost boardPost);

    List<BoardPostDto.Response> boardPostsToBoardPostResponseDtos(List<BoardPost> response);
}