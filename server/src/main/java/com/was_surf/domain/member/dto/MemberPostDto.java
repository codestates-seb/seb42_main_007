package com.was_surf.domain.member.dto;

import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Getter
public class MemberPostDto {

    @NotBlank
    @Email
    private String email;

    @NotBlank(message = "displayName 은 공백을 사용할 수 없습니다.")
    private String displayName;

    @NotBlank(message = "password 는 공백을 사용할 수 없습니다.")
    private String password;

    @NotBlank
    private String aboutMe;

}
