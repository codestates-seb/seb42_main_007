package com.was_surf.domain.board_comment.mapper;

import com.was_surf.domain.board_comment.dto.BoardCommentPatchDto;
import com.was_surf.domain.board_comment.dto.BoardCommentPostDto;
import com.was_surf.domain.board_comment.dto.BoardCommentResponseDto;
import com.was_surf.domain.board_comment.domain.BoardComment;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface BoardCommentMapper {
    BoardComment commentPostDtoToComment(BoardCommentPostDto commentPostDto);

    BoardComment commentPatchDtoToComment(BoardCommentPatchDto commentPatchDto);

    BoardCommentResponseDto commentToCommentResponseDto(BoardComment comment);

    List<BoardCommentResponseDto> commentToCommentResponseDtos(List<BoardComment> boardComments);
}
