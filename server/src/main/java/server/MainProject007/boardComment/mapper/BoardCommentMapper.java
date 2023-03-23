package server.MainProject007.boardComment.mapper;

import org.mapstruct.Mapper;
import server.MainProject007.boardComment.dto.BoardCommentPatchDto;
import server.MainProject007.boardComment.dto.BoardCommentPostDto;
import server.MainProject007.boardComment.dto.BoardCommentResponseDto;

import server.MainProject007.boardComment.entity.BoardComment;

import java.util.List;

@Mapper(componentModel = "spring")
public interface BoardCommentMapper {
    BoardComment commentPostDtoToComment(BoardCommentPostDto commentPostDto);

    BoardComment commentPatchDtoToComment(BoardCommentPatchDto commentPatchDto);

    BoardCommentResponseDto commentToCommentResponseDto(BoardComment comment);

    List<BoardCommentResponseDto> commentToCommentResponseDtos(List<BoardComment> boardComments);
}
