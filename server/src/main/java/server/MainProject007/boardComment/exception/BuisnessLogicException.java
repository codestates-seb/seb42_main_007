package server.MainProject007.boardComment.exception;

import lombok.Getter;

public class BuisnessLogicException extends RuntimeException {
    @Getter
    private ExceptionCode exceptionCode;

    public BuisnessLogicException(ExceptionCode exceptionCode) {
        super(exceptionCode.getMessage());
        this.exceptionCode = exceptionCode;
    }
}
