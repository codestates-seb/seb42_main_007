package server.MainProject007.boardPost.mapper;

import org.mapstruct.Mapper;
import server.MainProject007.boardPost.dto.BoardPostDto;
import server.MainProject007.boardPost.entity.BoardPost;
import server.MainProject007.member.entity.Member;

import java.util.List;

@Mapper(componentModel = "spring")
public interface BoardPostMapper {

    // postDto -> entity
    default BoardPost boardPostPostDtoToBoardPost(BoardPostDto.Post boardPostPost) {
        BoardPost boardPost = new BoardPost();

        Member member = new Member();
        member.setMemberId(boardPostPost.getMemberId());

        boardPost.setBoardTitle(boardPostPost.getBoardTitle());
        boardPost.setBoardContent(boardPostPost.getBoardContent());
        boardPost.setBoardImgPath(boardPostPost.getBoardImgPath());
        boardPost.setCreatedAt(boardPostPost.getCreatedAt());

//        boardPost.setMember(member);

        return boardPost;
    }

    // patchDto -> entity
    default BoardPost boardPostPatchDtoToBoardPost(BoardPostDto.Patch boardPostPatch) {
        return null;
    };

    // entity -> responseDto
    default BoardPostDto.Response boardPostToBoardPostResponseDto(BoardPost boardPost) {
        BoardPostDto.Response responseBoardPost = new BoardPostDto.Response();

        responseBoardPost.setBoardPostId(boardPost.getBoardPostId());
        responseBoardPost.setBoardTitle(boardPost.getBoardTitle());
        responseBoardPost.setBoardContent(boardPost.getBoardContent());
        responseBoardPost.setEmail(boardPost.getMember().getEmail());
        responseBoardPost.setDisplayName(boardPost.getMember().getDisplayName());
        responseBoardPost.setCreatedAt(boardPost.getCreatedAt());
        responseBoardPost.setUpdatedAt(boardPost.getUpdatedAt());
        responseBoardPost.setBoardImgPath(boardPost.getBoardImgPath());
        responseBoardPost.setBoardViewCount(boardPost.getBoardViewCount());

        return responseBoardPost;
    }

    List<BoardPostDto.Response> boardPostsToBoardPostsResponseDto(List<BoardPost> response);
}
