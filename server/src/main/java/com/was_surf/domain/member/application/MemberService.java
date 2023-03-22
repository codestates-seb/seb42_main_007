package com.was_surf.domain.member.application;

import com.was_surf.domain.member.domain.Member;
import com.was_surf.domain.member.dto.MemberDto;
import com.was_surf.domain.member.lib.Response;
import com.was_surf.global.config.util.CustomAuthorityUtils;
import com.was_surf.global.error.exception.BusinessLogicException;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.ExceptionHandler;
import com.was_surf.global.config.jwt.JwtToken;
import com.was_surf.global.config.jwt.JwtTokenProvider;
import com.was_surf.domain.member.repository.MemberRepository;
import com.was_surf.global.error.exception.ExceptionCode;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.TimeUnit;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;
    private final PasswordEncoder PasswordEncoder;
    private final CustomAuthorityUtils authorityUtils;
    private final JwtTokenProvider jwtTokenProvider;
    private final AuthenticationManagerBuilder authenticationManagerBuilder;
    private final RedisTemplate redisTemplate;
    private final Response response;

    public JwtToken login(String email, String password){
        UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(email,password);
        Authentication authentication = authenticationManagerBuilder.getObject().authenticate(authenticationToken);

        JwtToken token = jwtTokenProvider.generateToken(authentication);

        redisTemplate.opsForValue().set("RT:"+authentication.getName(),token.getRefreshToken(),token.getRefreshTokenExpirationTime(), TimeUnit.MILLISECONDS);
        return token;
    }
    public ResponseEntity<?> logout(MemberDto.Logout logout) {
        if(!jwtTokenProvider.validateToken(logout.getAccessToken())){
            return response.fail("잘못된 요청입니다.",HttpStatus.BAD_REQUEST);
        }
        Authentication authentication = jwtTokenProvider.getAuthentication(logout.getAccessToken());

        if (redisTemplate.opsForValue().get("RT:" + authentication.getName()) !=null){
            redisTemplate.delete("RT:" + authentication.getName());
        }
        Long expiration = jwtTokenProvider.getExpiration(logout.getAccessToken());
        redisTemplate.opsForValue().set(logout.getAccessToken(),"logout",expiration,TimeUnit.MILLISECONDS);

        return response.success("로그아웃 되었습니다.");
    }

    public Member findMember(long memberId){
        return findVerifiedMember(memberId);
    }
    public Member updateMember(Member member){
        Member findMember = findVerifiedMember(member.getMemberId());

        Optional.ofNullable(member.getDisplayName())
                .ifPresent(memberDisplayName->findMember.setDisplayName(memberDisplayName));
        Optional.ofNullable(member.getPassword())
                .ifPresent(memberPassword->findMember.setPassword(memberPassword));
        Optional.ofNullable(member.getAboutMe())
                .ifPresent(memberAboutMe->findMember.setAboutMe(memberAboutMe));

        return memberRepository.save(findMember);
    }
    public void deleteMember(Long memberId){
        Member member = findVerifiedMember(memberId);

        memberRepository.delete(member);
    }

    public Member createMember(Member member){
        verifyExistEmail(member.getEmail());

        String encryptedPassword = PasswordEncoder.encode(member.getPassword());
        member.setPassword(encryptedPassword);

        List<String> roles = authorityUtils.createRoles(member.getEmail());
        member.setRoles(roles);

        return memberRepository.save(member);
    }

    public Member findVerifiedMember(long memberId){
        Optional<Member> optionalMember = memberRepository.findById(memberId);

        Member findMember = optionalMember.orElseThrow(()->new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        if (findMember.getMemberStatus() == Member.MemberStatus.MEMBER_NOT_EXIST){
            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND);
        }
        return findMember;
    }
    @ExceptionHandler(BusinessLogicException.class)
    public ResponseEntity<String> handleBusinessLogicException(BusinessLogicException e) {
        return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
    }
    private void verifyExistEmail(String email){
        Optional<Member> member = memberRepository.findByEmail(email);
        if(member.isPresent())
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXIST);
    }
}
