package server.MainProject007.config.memberdetails;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import server.MainProject007.config.util.CustomAuthorityUtils;
import server.MainProject007.member.entity.Member;
import server.MainProject007.member.repository.MemberRepository;

import java.util.Collection;
import java.util.Optional;

@Component
@RequiredArgsConstructor
public class CustomMemberDetailsService implements UserDetailsService {

    private final MemberRepository memberRepository;
    private final CustomAuthorityUtils authorityUtils;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException{
        Optional<Member> optionalMember = memberRepository.findByEmail(username);
        Member findMember = optionalMember.orElseThrow(()->new UsernameNotFoundException("사용자를 찾을 수 없습니다"));

        return new CustomMemberDetails(findMember);
    }
    private final class CustomMemberDetails extends Member implements UserDetails{
        CustomMemberDetails(Member member){
            setMemberId(member.getMemberId());
            setEmail(member.getEmail());
            setDisplayName(member.getDisplayName());
            setPassword(member.getPassword());
            setRoles(member.getRoles());
        }
        @Override
        public Collection<? extends GrantedAuthority> getAuthorities(){
            return authorityUtils.createAuthorities(this.getRoles());
        }

        @Override
        public String getUsername() {
            return getEmail();
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

    }
}
