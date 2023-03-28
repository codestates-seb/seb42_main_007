package com.was_surf.domain.board_post.api;

import com.was_surf.domain.board_post.application.BoardPostService;
import com.was_surf.domain.board_post.dto.BoardPostDto;
import com.was_surf.domain.board_post.domain.BoardPost;
import com.was_surf.domain.board_post.mapper.BoardPostMapper;
import com.was_surf.domain.member.application.MemberService;
import com.was_surf.domain.member.domain.Member;
import com.was_surf.global.common.response.MultiResponseDto;
import com.was_surf.global.common.response.SingleResponseDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;
import java.security.Principal;

@RestController
@RequiredArgsConstructor
@RequestMapping("/board-posts")
@Slf4j
@Validated
public class BoardPostController {

    private final BoardPostService boardPostService;
    private final BoardPostMapper mapper;
    private final MemberService memberService;


    // 게시글 등록
    @PostMapping
    public ResponseEntity postBoardPost(@RequestBody @Valid BoardPostDto.Post postDto, Principal principal) {

        BoardPost boardPost = mapper.boardPostPostDtoToBoardPost(postDto);

        BoardPost createdBoardPost = boardPostService.createBoardPost(boardPost, principal.getName());
        BoardPostDto.Response response = mapper.boardPostToBoardPostResponseDto(createdBoardPost);

        return ResponseEntity.ok().build();
    }

    // 게시글 수정
    @PatchMapping("/{board-post-id}")
    public ResponseEntity patchBoardPost(@RequestBody BoardPostDto.Patch patchDto,
                                         @PathVariable("board-post-id") Long boardPostId,
                                         Principal principal) {

        patchDto.setBoardPostId(boardPostId);
        BoardPost updatedBoardPost = boardPostService.updateBoardPost(mapper.boardPostPatchDtoToBoardPost(patchDto), principal.getName());
        BoardPostDto.Response response = mapper.boardPostToBoardPostResponseDto(updatedBoardPost);

        return ResponseEntity.ok().build();
    }

    // 게시글 검색 조회
    @GetMapping("/{board-post-id}")
    public ResponseEntity getBoardPost(@PathVariable("board-post-id") @Positive Long boardPostId) {

        BoardPost foundBoardPost = boardPostService.findBoardPost(boardPostId);
        BoardPostDto.Response response = mapper.boardPostToBoardPostResponseDto(foundBoardPost);

        return new ResponseEntity<>(new SingleResponseDto<>(response), HttpStatus.OK);
    }

    // 게시글 전체 조회: 페이지네이션
    @GetMapping
    public ResponseEntity getBoardPosts(@RequestParam int page,
                                        @RequestParam @Positive int size) {
        Page<BoardPost> pageBoardPosts = boardPostService.findBoardPosts(page - 1, size);
        List<BoardPost> boardPostList = pageBoardPosts.getContent();

        return new ResponseEntity<>(new MultiResponseDto<>(mapper.boardPostsToBoardPostResponseDtos(boardPostList), pageBoardPosts), HttpStatus.OK);
    }

    // 게시글 삭제
    @DeleteMapping("/{board-post-id}")
    public void deleteBoardPost(@PathVariable("board-post-id") @Positive Long boardPostId,
                                          Principal principal) {
        boardPostService.deleteBoardPost(boardPostId, principal.getName());
    }
}