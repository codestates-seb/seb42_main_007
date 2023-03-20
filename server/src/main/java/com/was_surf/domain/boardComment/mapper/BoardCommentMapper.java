package com.was_surf.domain.boardComment.mapper;

import org.mapstruct.Mapper;
import com.was_surf.domain.boardComment.dto.BoardCommentPatchDto;
import com.was_surf.domain.boardComment.dto.BoardCommentPostDto;
import com.was_surf.domain.boardComment.dto.BoardCommentResponseDto;

import com.was_surf.domain.boardComment.domain.BoardComment;

import java.util.List;

@Mapper(componentModel = "spring")
public interface BoardCommentMapper {
    BoardComment commentPostDtoToComment(BoardCommentPostDto commentPostDto);

    BoardComment commentPatchDtoToComment(BoardCommentPatchDto commentPatchDto);

    BoardCommentResponseDto commentToCommentResponseDto(BoardComment comment);

    List<BoardCommentResponseDto> commentToCommentResponseDtos(List<BoardComment> boardComments);
}
