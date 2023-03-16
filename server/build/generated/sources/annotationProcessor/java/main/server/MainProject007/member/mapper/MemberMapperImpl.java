package server.MainProject007.member.mapper;

import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;
import server.MainProject007.member.dto.MemberPatchDto;
import server.MainProject007.member.dto.MemberPostDto;
import server.MainProject007.member.dto.MemberResponseDto;
import server.MainProject007.member.dto.MemberResponseDto.MemberResponseDtoBuilder;
import server.MainProject007.member.entity.Member;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-03-15T15:37:50+0900",
    comments = "version: 1.4.2.Final, compiler: IncrementalProcessingEnvironment from gradle-language-java-7.6.1.jar, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class MemberMapperImpl implements MemberMapper {

    @Override
    public Member memberPostDtoToMember(MemberPostDto memberPostDto) {
        if ( memberPostDto == null ) {
            return null;
        }

        Member member = new Member();

        member.setDisplayName( memberPostDto.getDisplayName() );
        member.setEmail( memberPostDto.getEmail() );
        member.setPassword( memberPostDto.getPassword() );
        member.setAboutMe( memberPostDto.getAboutMe() );

        return member;
    }

    @Override
    public Member memberPatchDtoToMember(MemberPatchDto memberPatchDto) {
        if ( memberPatchDto == null ) {
            return null;
        }

        Member member = new Member();

        member.setMemberId( memberPatchDto.getMemberId() );
        member.setDisplayName( memberPatchDto.getDisplayName() );
        member.setPassword( memberPatchDto.getPassword() );
        member.setAboutMe( memberPatchDto.getAboutMe() );

        return member;
    }

    @Override
    public MemberResponseDto memberToMemberResponse(Member member) {
        if ( member == null ) {
            return null;
        }

        MemberResponseDtoBuilder memberResponseDto = MemberResponseDto.builder();

        memberResponseDto.memberId( member.getMemberId() );
        memberResponseDto.displayName( member.getDisplayName() );
        memberResponseDto.email( member.getEmail() );
        memberResponseDto.password( member.getPassword() );
        memberResponseDto.aboutMe( member.getAboutMe() );
        memberResponseDto.memberStatus( member.getMemberStatus() );

        return memberResponseDto.build();
    }
}
