package com.was_surf.domain.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;

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

    }
    @Getter
    @AllArgsConstructor
    public static class Response{
        private long memberId;
        private String displayName;
        private String email;
        private String password;
    }
    @Getter
    @AllArgsConstructor
    public static class Patch{
        private long memberId;
        private String displayName;
        private String password;

        public void setMemberId(long memberId){
            this.memberId = memberId;
        }
    }
    @Getter
    @Setter
    public static class Logout {
        @NotEmpty(message = "토큰이 비어있습니다")
        private String accessToken;

        @NotEmpty(message = "토큰이 비어있습니다")
        private String refreshToken;
    }
    @Getter
    @Setter
    public static class Login {
        @NotEmpty(message = "이메일은 필수 입력값입니다.")
        @Email
        private String email;

        @NotEmpty(message = "비밀번호는 필수 입력값입니다.")
        private String password;

        public UsernamePasswordAuthenticationToken toAuthentication() {
            return new UsernamePasswordAuthenticationToken(email, password);
        }
    }
}
