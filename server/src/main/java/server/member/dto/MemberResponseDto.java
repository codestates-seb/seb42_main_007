package server.member.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import server.member.entity.Member;

@Getter
@Setter
@NoArgsConstructor
public class MemberResponseDto {
    private String displayName;
    private String email;
    private Member.MemberStatus memberStatus;
    private String password;
}
