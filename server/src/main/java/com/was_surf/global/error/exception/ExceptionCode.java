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
    REVIEW_NOT_FOUND(404, "리뷰를 찾을 수 없습니다."),
    SPOT_NOT_FOUND(404, "스팟을 찾을 수 없습니다."),
    REGION_NOT_FOUND(404, "장소를 찾을 수 없습니다."),
    SPOTDATA_NOT_FOUND(404, "날씨 정보를 찾을 수 없습니다."),
    POST_NOT_CHANGE(404, "수정할 내용이 없습니다."),
    COMMENT_NOT_CHANGE(404, "수정할 내용이 없습니다."),
    WRONG_TOKEN_INPUT(403, "잘못된 토큰입니다."),
    WRONG_FORMAT_OF_DATE(400, "날짜 형식이 올바르지 않습니다. (ex. 2023-03-23T12:20:00)"),
    LESSON_CLASS_NOT_FOUND(404, "강습 클래스를 찾을 수 없습니다."),
    MEMBER_NOT_MATCH(403, "작성자와 회원정보가 일치하지 않습니다."),
    REGISTER_NOT_FOUND(404, "작성자와 회원정보가 일치하지 않습니다."),
    IMPOSSIBLE_REGISTER(403, "강습 주최자는 강습 클래스 수강 신청이 불가능합니다."),
    NOT_PERMISSION_MEMBER(403, "강습 클래스 작성 권한이 없습니다."),
    FULL_HEADCOUNT(403, "신청 인원이 다 찼습니다."),
    OVER_HEADCOUNT(403, "신청 가능한 인원보다 많습니다."),
    REGISTER_EXIST(409, "이미 신청한 강습 클래스입니다.");

    private int httpStatus;
    private String message;

    ExceptionCode(int httpStatus, String message) {
        this.message = message;
        this.httpStatus = httpStatus;
    }
}
