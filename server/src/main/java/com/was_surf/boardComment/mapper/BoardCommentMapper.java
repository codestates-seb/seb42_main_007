package com.was_surf.boardComment.mapper;

import org.mapstruct.Mapper;
import com.was_surf.boardComment.dto.BoardCommentPatchDto;
import com.was_surf.boardComment.dto.BoardCommentPostDto;
import com.was_surf.boardComment.dto.BoardCommentResponseDto;

import com.was_surf.boardComment.entity.BoardComment;

import java.util.List;

@Mapper(componentModel = "spring")
public interface BoardCommentMapper {
    BoardComment commentPostDtoToComment(BoardCommentPostDto commentPostDto);

    BoardComment commentPatchDtoToComment(BoardCommentPatchDto commentPatchDto);

    BoardCommentResponseDto commentToCommentResponseDto(BoardComment comment);

    List<BoardCommentResponseDto> commentToCommentResponseDtos(List<BoardComment> boardComments);
}
