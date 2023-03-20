package com.was_surf.global.common.response;

import lombok.Getter;

@Getter
public class SingleResponseEntity<T> {
    private T data;

    public SingleResponseEntity(T data) {
        this.data = data;
    }
}
