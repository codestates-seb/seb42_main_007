package server.MainProject007.member.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import server.MainProject007.audit.Auditable;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@Entity
@NoArgsConstructor
@Table(name = "members")
public class Member  {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long memberId;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false, name = "STATUS")
    private MemberStatus memberStatus = MemberStatus.MEMBER_EXIST;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String displayName;

    @Column(nullable = false, updatable = false, unique = true, columnDefinition = "TEXT")
    private String email;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String password;

    @Column(nullable = false, columnDefinition = "TEXT")
    private String aboutMe;

    public Member(String displayName, String email, String password) {
        this.displayName = displayName;
        this.email = email;
        this.password = password;
    }

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();


    public enum MemberStatus{
        MEMBER_NOT_EXIST("존재하지 않는 회원"),
        MEMBER_EXIST("활동중인 회원");

        @Getter
        private String status;

        MemberStatus(String status){
            this.status = status;
        }
    }


}
