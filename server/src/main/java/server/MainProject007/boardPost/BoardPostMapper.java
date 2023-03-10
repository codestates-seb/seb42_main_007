package server.MainProject007.boardPost;

import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface BoardPostMapper {

    // postDto -> entity
    default BoardPost boardPostPostDtoToBoardPost(BoardPostDto.Post boardPostPost) {
        BoardPost boardPost = new BoardPost();

        Member member = new Member();
        member.setMemberId(boardPostPost.getMemberId());

        boardPost.setTitle(boardPostPost.getTitle());
        boardPost.setContent(boardPostPost.getContent());
        boardPost.setCreatedAt(boardPostPost.getCreatedAt());

        boardPost.setMember(member);

        return boardPost;
    }

    // patchDto -> entity
    BoardPost boardPostPatchDtoToBoardPost(BoardPostDto.Patch boardPostPatch);

    // entity -> responseDto
    default BoardPostDto.Response boardPostToBoardPostResponseDto(BoardPost boardPost) {
        BoardPostDto.Response responseBoardPost = new BoardPostDto.Response();

        responseBoardPost.setBoardPostId(boardPost.getBoardPostId());
        responseBoardPost.setTitle(boardPost.getTitle());
        responseBoardPost.setContent(boardPost.getContent());
        responseBoardPost.setEmail(boardPost.getMember().getEmail());
        responseBoardPost.setDisplayName(boardPost.getMember().getDisplayName());
        responseBoardPost.setCreatedAt(boardPost.getCreatedAt());
        responseBoardPost.setUpdatedAt(boardPost.getUpdatedAt());

        return responseBoardPost;
    }

    List<BoardPostDto.Response> boardPostsToBoardPostsResponseDto(List<BoardPost> response);
}
