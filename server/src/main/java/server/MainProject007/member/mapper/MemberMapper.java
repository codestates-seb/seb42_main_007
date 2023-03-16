package server.MainProject007.member.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import server.MainProject007.member.dto.MemberPatchDto;
import server.MainProject007.member.dto.MemberPostDto;
import server.MainProject007.member.dto.MemberResponseDto;
import server.MainProject007.member.entity.Member;

import java.util.List;

@Mapper(componentModel = "Spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface MemberMapper {
    Member memberPostDtoToMember(MemberPostDto memberPostDto);

    Member memberPatchDtoToMember(MemberPatchDto memberPatchDto);

    MemberResponseDto memberToMemberResponse(Member member);




}
