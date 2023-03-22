package com.was_surf.domain.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

public class MemberDto {

    @Getter
    @AllArgsConstructor
    public static class Post{
        @NotBlank
        private String displayName;

        @NotBlank
        @Email
        private String email;

        @NotBlank
        private String password;

        @NotBlank
        private String aboutMe;
    }
    @Getter
    @AllArgsConstructor
    public static class Response{
        private long memberId;
        private String displayName;
        private String email;
        private String password;
        private String aboutMe;
    }
    @Getter
    @AllArgsConstructor
    public static class Patch{
        private long memberId;
        private String displayName;
        private String password;
        private String aboutMe;

        public void setMemberId(long memberId){
            this.memberId = memberId;
        }
    }
}
