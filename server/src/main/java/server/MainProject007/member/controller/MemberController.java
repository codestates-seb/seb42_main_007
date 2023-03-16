package server.MainProject007.member.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import server.MainProject007.config.jwt.JwtToken;
import server.MainProject007.member.entity.Member;
import server.MainProject007.member.service.MemberService;
import server.MainProject007.member.dto.MemberPatchDto;
import server.MainProject007.member.dto.MemberPostDto;
import server.MainProject007.member.mapper.MemberMapper;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.Map;

@RestController
@RequestMapping("/members")
@Validated
public class MemberController {

    private final MemberService memberService;
    private final MemberMapper mapper;

    public MemberController(MemberService memberService, MemberMapper mapper) {
        this.memberService = memberService;
        this.mapper = mapper;
    }
    @PostMapping("/login")
    public ResponseEntity<JwtToken> loginSuccess(@RequestBody Map<String,String> loginForm){
        JwtToken token = memberService.login(loginForm.get("email"), loginForm.get("password"));
        return ResponseEntity.ok(token);
    }
    @PostMapping
    public ResponseEntity postMember(@Valid@RequestBody MemberPostDto memberPostDto){
        Member createMember = memberService.createMember(mapper.memberPostDtoToMember(memberPostDto));
        return new ResponseEntity<>(mapper.memberToMemberResponse(createMember), HttpStatus.CREATED);
    }

    @PatchMapping("/{member-id}")
    public ResponseEntity patchMember(@PathVariable("member-id")@Positive long memberId,
                                      @Valid@RequestBody MemberPatchDto memberPatchDto){
        memberPatchDto.setMemberId(memberId);

        Member updateMember = memberService.updateMember(mapper.memberPatchDtoToMember(memberPatchDto));

        return new ResponseEntity<>(mapper.memberToMemberResponse(updateMember),HttpStatus.OK);
    }

    @GetMapping("/{member-id}")
    public ResponseEntity getMember(@PathVariable("member-id") @Positive long memberId){
        Member findMember = memberService.findMember(memberId);
        return new ResponseEntity<>(mapper.memberToMemberResponse(findMember),HttpStatus.OK);
    }

    @DeleteMapping("/{member-id}")
    public ResponseEntity deleteMember(@PathVariable("member-id") @Positive long memberId){
        memberService.deleteMember(memberId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
