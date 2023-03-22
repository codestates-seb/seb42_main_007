package com.was_surf.domain.member.dto;

import com.was_surf.domain.lesson_register.domain.LessonRegister;
import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.util.List;

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
        private List<LessonRegister> lessonRegisters;
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
