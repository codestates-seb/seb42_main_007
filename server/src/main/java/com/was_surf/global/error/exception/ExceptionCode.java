package com.was_surf.global.error.exception;

import lombok.Getter;

@Getter
public enum ExceptionCode {
    MEMBER_NOT_FOUND(404, "회원을 찾을 수 없습니다."),
    MEMBER_EXIST(409,"이미 가입한 회원입니다."),
    SERVICE_NOT_READY(404, "아직 구현되지 않았습니다."),
    INCORRECT_DATA_REQUESTED(400, "요청에 존재하지 않는 데이터 값이 참조됐을 수 있습니다."),
    POST_NOT_FOUND(404, "게시글을 찾을 수 없습니다."),
    COMMENT_NOT_FOUND(404, "댓글을 찾을 수 없습니다."),
    POST_NOT_CHANGE(404, "수정할 내용이 없습니다."),
    COMMENT_NOT_CHANGE(404, "수정할 내용이 없습니다."),
    WRONG_TOKEN_INPUT(403, "잘못된 토큰입니다."),
    WRONG_FORMAT_OF_DATE(400, "날짜 형식이 올바르지 않습니다. (ex. 예시 적기)"),
    LESSON_CLASS_NOT_FOUND(404, "강습 클래스를 찾을 수 없습니다."),
    MEMBER_NOT_MATCH(404, "작성자가 아닌 다른 회원은 삭제할 수 없습니다.");

    private int httpStatus;
    private String message;

    ExceptionCode(int httpStatus, String message) {
        this.message = message;
        this.httpStatus = httpStatus;
    }
}
