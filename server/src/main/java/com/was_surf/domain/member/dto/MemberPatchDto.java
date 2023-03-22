package com.was_surf.domain.member.dto;

import lombok.*;

@Getter
@Setter
@NoArgsConstructor
public class MemberPatchDto {
    private long memberId;
    private String displayName;
    private String password;
    private String aboutMe;

    @Builder
    public MemberPatchDto(long memberId, String displayName, String password, String aboutMe) {
        this.memberId = memberId;
        this.displayName = displayName;
        this.password = password;
        this.aboutMe = aboutMe;
    }
}
