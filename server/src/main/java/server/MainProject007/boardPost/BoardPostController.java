package server.MainProject007.boardPost;

import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import server.MainProject007.responseDto.MultiResponseEntity;
import server.MainProject007.responseDto.PageInfo;
import server.MainProject007.responseDto.SingleResponseEntity;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/board-posts")
@Slf4j
@Validated
public class BoardPostController {

    private final BoardPostService boardPostService;
    private final BoardPostMapper mapper;

    public BoardPostController(BoardPostService boardPostService,
                               BoardPostMapper mapper) {
        this.boardPostService = boardPostService;
        this.mapper = mapper;
    }

    // 게시글 등록
    @PostMapping
    public ResponseEntity postBoardPost(@RequestBody @Valid BoardPostDto.Post postDto) {

        BoardPost createdBoardPost = boardPostService.createBoardPost(mapper.boardPostPostDtoToBoardPost(postDto));
        BoardPostDto.Response response = mapper.boardPostToBoardPostResponseDto(createdBoardPost);

        return ResponseEntity.ok().build();
    }

    // 게시글 수정
    @PatchMapping("/{board-post-id}")
    public ResponseEntity patchBoardPost(@RequestBody BoardPostDto.Patch patchDto,
                                         @PathVariable("board-post-id") Long boardPostId) {
        patchDto.setBoardPostId(boardPostId);
        BoardPost updatedBoardPost = boardPostService.updateBoardPost(mapper.boardPostPatchDtoToBoardPost(patchDto));
        BoardPostDto.Response response = mapper.boardPostToBoardPostResponseDto(updatedBoardPost);

        return ResponseEntity.ok().build();
    }

    // 게시글 검색 조회
    @GetMapping("/{board-post-id}")
    public ResponseEntity getBoardPost(@PathVariable("board-post-id") Long boardPostId) {

    BoardPost foundBoardPost = boardPostService.findBoardPost(boardPostId);
    BoardPostDto.Response response = mapper.boardPostToBoardPostResponseDto(foundBoardPost);

    return new ResponseEntity<>(new SingleResponseEntity<>(response), HttpStatus.OK);
    }

    // 게시글 전체 조회: 페이지네이션
    @GetMapping
    public ResponseEntity getBoardPosts (@RequestParam int page,
                                         @RequestParam @Positive int size) {
        Page<BoardPost> pageBoardPosts = boardPostService.findBoardPosts(page, size);
        List<BoardPost> boardPostList = pageBoardPosts.getContent();

        PageInfo pageInfo = new PageInfo(pageBoardPosts.getNumber(), pageBoardPosts.getSize(),
                pageBoardPosts.getTotalPages(), pageBoardPosts.getTotalElements());

        return new ResponseEntity<>(new MultiResponseEntity<>(mapper.boardPostsToBoardPostsResponseDto(boardPostList), pageInfo), HttpStatus.OK);
    }

    // 게시글 삭제
    @DeleteMapping("/{board-post-id}")
    public ResponseEntity deleteBoardPost(@PathVariable("board-post-id") Long boardPostId) {
        boardPostService.deleteBoardPost(boardPostId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
