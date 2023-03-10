package server.MainProject007.comment.mapper;

import org.mapstruct.Mapper;
import server.MainProject007.comment.dto.BoardCommentPatchDto;
import server.MainProject007.comment.dto.BoardCommentPostDto;
import server.MainProject007.comment.dto.BoardCommentResponseDto;

import server.MainProject007.comment.entity.BoardComment;

import java.util.List;

@Mapper(componentModel = "spring")
public interface BoardCommentMapper {
    BoardComment commentPostDtoToComment(BoardCommentPostDto commentPostDto);

    BoardComment commentPatchDtoToComment(BoardCommentPatchDto commentPatchDto);

    BoardCommentResponseDto commentToCommentResponseDto(BoardComment comment);

    List<BoardCommentResponseDto> commentToCommentResponseDtos(List<BoardComment> boardComments);
}
