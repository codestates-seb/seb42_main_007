package com.was_surf.domain.board_comment.mapper;

import com.was_surf.domain.board_comment.dto.BoardCommentDto;
import com.was_surf.domain.board_comment.domain.BoardComment;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface BoardCommentMapper {
    BoardComment commentPostDtoToComment(BoardCommentDto.Post commentPostDto);

    BoardComment commentPatchDtoToComment(BoardCommentDto.Patch commentPatchDto);

    BoardCommentDto.Response commentToCommentResponseDto(BoardComment comment);

    List<BoardCommentDto.Response> commentToCommentResponseDtos(List<BoardComment> boardComments);
}
