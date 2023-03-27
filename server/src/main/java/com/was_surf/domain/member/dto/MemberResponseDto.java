package com.was_surf.domain.member.dto;

import com.was_surf.domain.member.domain.Member;
import lombok.Builder;
import lombok.Getter;

@Builder
@Getter
public class MemberResponseDto {

    private long memberId;

    private String displayName;

    private String email;

    private String password;

    private Member.MemberStatus memberStatus;
}
