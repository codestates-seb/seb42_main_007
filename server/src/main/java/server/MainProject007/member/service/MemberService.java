package server.MainProject007.member.service;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import server.MainProject007.member.repository.MemberRepository;
import server.MainProject007.exception.BusinessLogicException;
import server.MainProject007.exception.ExceptionCode;
import server.MainProject007.member.entity.Member;

import java.util.Optional;

@Service
public class MemberService {

    private final MemberRepository memberRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public MemberService(MemberRepository memberRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.memberRepository = memberRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
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

        member.setPassword(bCryptPasswordEncoder.encode(member.getPassword()));
        member.setRoles(member.getRoles());

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

    private void verifyExistEmail(String email){
        Optional<Member> member = memberRepository.findByEmail(email);
        if(member.isPresent())
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXIST);
    }



}
