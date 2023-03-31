package com.was_surf.domain.board_comment.mapper;

import com.was_surf.domain.board_comment.dto.BoardCommentDto;
import com.was_surf.domain.board_comment.domain.BoardComment;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface BoardCommentMapper {
    @Mapping(source = "boardPostId", target = "boardPost.boardPostId")
    BoardComment commentPostDtoToComment(BoardCommentDto.Post commentPostDto);

    BoardComment commentPatchDtoToComment(BoardCommentDto.Patch commentPatchDto);

    @Mapping(source = "member.displayName", target = "displayName")
    @Mapping(source = "boardPost.boardPostId", target = "boardPostId")
    BoardCommentDto.Response commentToCommentResponseDto(BoardComment comment);

    List<BoardCommentDto.Response> commentToCommentResponseDtos(List<BoardComment> boardComments);
}
