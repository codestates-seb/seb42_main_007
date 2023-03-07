package server.exception;

import lombok.Getter;

public enum ExceptionCode {
    MEMBER_NOT_FOUND(404,"Member not found"),
    MEMBER_EXIST(409,"Member exists");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
