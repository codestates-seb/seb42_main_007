package server.member.mapper;

import org.mapstruct.Mapper;
import server.member.dto.MemberPatchDto;
import server.member.dto.MemberPostDto;
import server.member.dto.MemberResponseDto;
import server.member.entity.Member;

@Mapper(componentModel = "Spring")
public interface MemberMapper {
    default Member memberPostDtoToMember(MemberPostDto memberPostDto){
        Member member = new Member();

        member.setEmail(memberPostDto.getEmail());
        member.setDisplayName(memberPostDto.getDisplayName());
        member.setPassword(memberPostDto.getPassword());
        member.setAboutMe(memberPostDto.getAboutMe());

        return member;
    }

    default Member memberPatchDtoToMember(MemberPatchDto memberPatchDto){
        Member member = new Member();

        member.setDisplayName(memberPatchDto.getDisplayName());
        member.setPassword(memberPatchDto.getPassword());
        member.setAboutMe(memberPatchDto.getAboutMe());

        return member;
    }

    default MemberResponseDto memberToMemberResponse(Member member){
        MemberResponseDto memberResponseDto = new MemberResponseDto();

        memberResponseDto.setEmail(member.getEmail());
        memberResponseDto.setDisplayName(member.getDisplayName());
        memberResponseDto.setMemberStatus(member.getMemberStatus());

        return memberResponseDto;
    }


}
