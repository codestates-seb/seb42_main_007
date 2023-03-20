package com.was_surf.global.common.response;

import lombok.Getter;

@Getter
public class SingleResponseDto<T> {
    private T data;

    public SingleResponseDto(T data) {
        this.data = data;
    }
}
