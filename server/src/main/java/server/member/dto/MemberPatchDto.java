package server.member.dto;

import lombok.Getter;

@Getter
public class MemberPatchDto {
    private long memberId;
    private String displayName;
    private String password;
    private String aboutMe;

    public void setMemberId(long memberId){
        this.memberId = memberId;
    }

}
