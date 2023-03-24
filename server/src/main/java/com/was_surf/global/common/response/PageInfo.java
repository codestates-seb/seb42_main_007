package com.was_surf.global.common.response;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class PageInfo {
    private int page;
    private int size;
    private long totalElements;
    private int totalPages;
}
