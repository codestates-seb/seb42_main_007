package com.was_surf.responseDto;

import lombok.Getter;

@Getter
public class SingleResponseEntity<T> {
    private T data;

    public SingleResponseEntity(T data) {
        this.data = data;
    }
}
