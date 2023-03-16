package com.was_surf.boardComment.controller;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.was_surf.boardComment.dto.BoardCommentPatchDto;
import com.was_surf.boardComment.dto.BoardCommentPostDto;
import com.was_surf.boardComment.entity.BoardComment;
import com.was_surf.boardComment.mapper.BoardCommentMapper;
import com.was_surf.boardComment.service.BoardCommentService;
import com.was_surf.responseDto.MultiResponseEntity;
import com.was_surf.utils.UriCreator;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/board-comments")
public class BoardCommentController {
    private final static String BOARD_COMMENT_DEFAULT_URL = "/board-comments";
    private final BoardCommentService boardCommentService;
    private final BoardCommentMapper mapper;

    public BoardCommentController(BoardCommentService boardCommentService, BoardCommentMapper mapper) {
        this.boardCommentService = boardCommentService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postBoardComment(@Valid @RequestBody BoardCommentPostDto boardCommentPostDto) {
        BoardComment boardComment = mapper.commentPostDtoToComment(boardCommentPostDto);

        BoardComment createdBoardComment = boardCommentService.createBoardComment(boardComment);
        URI location = UriCreator.createUri(BOARD_COMMENT_DEFAULT_URL, createdBoardComment.getBoardCommentId());

        return ResponseEntity.created(location).build();
    }

    @PatchMapping("/{comment-id}")
    public ResponseEntity patchBoardComment(@PathVariable("comment-id") @Positive long boardCommentId,
                                            @Valid @RequestBody BoardCommentPatchDto boardCommentPatchDto) {
        boardCommentPatchDto.setBoardCommentId(boardCommentId);

        BoardComment boardComment = mapper.commentPatchDtoToComment(boardCommentPatchDto);

        BoardComment updatedBoardComment = boardCommentService.updateBoardComment(boardComment);

        return new ResponseEntity<>(mapper.commentToCommentResponseDto(updatedBoardComment), HttpStatus.OK);
    }

    @GetMapping("/{comment-id}")
    public ResponseEntity getBoardComment(@PathVariable("comment-id") @Positive long boardCommentId) {
        BoardComment findBoardComment = boardCommentService.findBoardComment(boardCommentId);
        return new ResponseEntity<>(mapper.commentToCommentResponseDto(findBoardComment), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getBoardComments(@Positive @RequestParam int page,
                                           @Positive @RequestParam int size) {
        Page<BoardComment> pageBoardComments = boardCommentService.findBoardComments(page - 1, size);
        List<BoardComment> boardcomments = pageBoardComments.getContent();
        return new ResponseEntity<>(new MultiResponseEntity<>(mapper.commentToCommentResponseDtos(boardcomments), pageBoardComments), HttpStatus.OK);
    }

    @DeleteMapping("/{comment-id}")
    public void deleteBoardComment(@PathVariable("comment-id") @Positive long boardCommentId) {
        boardCommentService.deleteBoardComment(boardCommentId);
    }
}
