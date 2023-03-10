package server.MainProject007.comment.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import server.MainProject007.comment.dto.BoardCommentPatchDto;
import server.MainProject007.comment.dto.BoardCommentPostDto;
import server.MainProject007.comment.dto.BoardCommentResponseDto;
import server.MainProject007.comment.entity.BoardComment;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-03-09T17:01:15+0900",
    comments = "version: 1.4.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.6.1.jar, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class BoardCommentMapperImpl implements BoardCommentMapper {

    @Override
    public BoardComment commentPostDtoToComment(BoardCommentPostDto commentPostDto) {
        if ( commentPostDto == null ) {
            return null;
        }

        BoardComment boardComment = new BoardComment();

        boardComment.setBoardCommentId( commentPostDto.getBoardCommentId() );
        boardComment.setComment( commentPostDto.getComment() );

        return boardComment;
    }

    @Override
    public BoardComment commentPatchDtoToComment(BoardCommentPatchDto commentPatchDto) {
        if ( commentPatchDto == null ) {
            return null;
        }

        BoardComment boardComment = new BoardComment();

        boardComment.setBoardCommentId( commentPatchDto.getBoardCommentId() );
        boardComment.setComment( commentPatchDto.getComment() );

        return boardComment;
    }

    @Override
    public BoardCommentResponseDto commentToCommentResponseDto(BoardComment comment) {
        if ( comment == null ) {
            return null;
        }

        BoardCommentResponseDto boardCommentResponseDto = new BoardCommentResponseDto();

        boardCommentResponseDto.setBoardCommentId( comment.getBoardCommentId() );
        boardCommentResponseDto.setComment( comment.getComment() );

        return boardCommentResponseDto;
    }

    @Override
    public List<BoardCommentResponseDto> commentToCommentResponseDtos(List<BoardComment> boardComments) {
        if ( boardComments == null ) {
            return null;
        }

        List<BoardCommentResponseDto> list = new ArrayList<BoardCommentResponseDto>( boardComments.size() );
        for ( BoardComment boardComment : boardComments ) {
            list.add( commentToCommentResponseDto( boardComment ) );
        }

        return list;
    }
}
