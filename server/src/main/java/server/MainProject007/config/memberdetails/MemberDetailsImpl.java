package server.MainProject007.config.memberdetails;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import server.MainProject007.member.entity.Member;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

public class MemberDetailsImpl implements MemberDetails {

    private long memberId;
    private String email;
    private String password;
    private String displayName;
    private Collection<? extends GrantedAuthority> authorities;

    public MemberDetailsImpl(long memberId, String email, String password, String displayName, Collection<? extends GrantedAuthority> authorities) {
        this.memberId = memberId;
        this.email = email;
        this.password = password;
        this.displayName = displayName;
        this.authorities = authorities;
    }

    public static MemberDetailsImpl build(Member member) {
        List<GrantedAuthority> authorities = member.getRoles().stream()
                .map(role -> new SimpleGrantedAuthority(role.getRoleName()))
                .collect(Collectors.toList());

        return new MemberDetailsImpl(
                member.getMemberId(),
                member.getEmail(),
                member.getPassword(),
                member.getDisplayName(),
                authorities);
    }


    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    @Override
    public long getMemberId() {
        return memberId;
    }

    @Override
    public String getEmail() {
        return email;
    }

    @Override
    public String getDisplayName() {
        return displayName;
    }
}

