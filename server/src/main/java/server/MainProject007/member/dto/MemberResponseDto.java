package server.MainProject007.member.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import server.MainProject007.member.entity.Member;

@Getter
@Setter
@NoArgsConstructor
public class MemberResponseDto {
    private long memberId;
    private String displayName;
    private String email;
    private String password;
    private String aboutMe;
    private Member.MemberStatus memberStatus;

}
