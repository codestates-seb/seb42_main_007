package com.was_surf.domain.member.mapper;

import com.was_surf.domain.member.domain.Member;
import com.was_surf.domain.member.dto.MemberPatchDto;
import com.was_surf.domain.member.dto.MemberPostDto;
import com.was_surf.domain.member.dto.MemberResponseDto;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "Spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface MemberMapper {
    Member memberPostDtoToMember(MemberPostDto memberPostDto);
    Member memberPatchDtoToMember(MemberPatchDto memberPatchDto);
    MemberResponseDto memberToMemberResponse(Member member);
}
