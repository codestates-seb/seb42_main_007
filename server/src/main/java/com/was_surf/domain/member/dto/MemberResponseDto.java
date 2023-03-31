package com.was_surf.domain.member.dto;

import com.was_surf.domain.lesson.domain.LessonRegister;
import com.was_surf.domain.member.domain.Member;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Builder
@Getter
public class MemberResponseDto {

    private long memberId;

    private String displayName;

    private String email;

    private Member.MemberStatus memberStatus;
    private List<LessonRegister> lessonRegisters;

}
