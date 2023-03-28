package com.was_surf.domain.member.api;

import com.was_surf.domain.member.dto.MemberDto;
import com.was_surf.domain.member.dto.MemberPatchDto;
import com.was_surf.domain.member.dto.MemberPostDto;
import com.was_surf.domain.member.domain.Member;
import com.was_surf.global.lib.Response;
import com.was_surf.global.lib.Helper;
import com.was_surf.domain.member.mapper.MemberMapper;
import com.was_surf.domain.member.application.MemberService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.security.Principal;

@RestController
@RequestMapping("/members")
@Validated
public class MemberController {

    private final MemberService memberService;
    private final MemberMapper mapper;
    private final Response response;

    public MemberController(MemberService memberService, MemberMapper mapper, Response response) {
        this.memberService = memberService;
        this.mapper = mapper;
        this.response = response;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@Validated MemberDto.Login login, Errors errors) {
        if (errors.hasErrors()) {
            return response.invalidFields(Helper.refineErrors(errors));
        }
        return memberService.login(login);
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(@Validated MemberDto.Logout logout, Errors errors) {
        if (errors.hasErrors()) {
            return response.invalidFields(Helper.refineErrors(errors));
        }
        return memberService.logout(logout);
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

//    @GetMapping("/{member-id}")
//    public ResponseEntity getMember(@PathVariable("member-id") @Positive long memberId){
//        Member findMember = memberService.findMember(memberId);
//        return new ResponseEntity<>(mapper.memberToMemberResponse(findMember),HttpStatus.OK);
//    }

    @GetMapping
    public ResponseEntity getMember(@PathVariable("member-id") @Positive long memberId,
                                    Principal principal){
        Member findMember = memberService.findMemberToEmail(principal.getName());
        return new ResponseEntity<>(mapper.memberToMemberResponse(findMember),HttpStatus.OK);
    }

    @DeleteMapping("/{member-id}")
    public ResponseEntity deleteMember(@PathVariable("member-id") @Positive long memberId){
        memberService.deleteMember(memberId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
