package com.was_surf.domain.member.api;

import com.was_surf.domain.member.application.MemberService;
import com.was_surf.domain.member.domain.Member;
import com.was_surf.domain.member.dto.MemberDto;
import com.was_surf.domain.member.dto.MemberPatchDto;
import com.was_surf.domain.member.dto.MemberPostDto;
import com.was_surf.domain.member.mapper.MemberMapper;
import com.was_surf.global.lib.Helper;
import com.was_surf.global.lib.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.Errors;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
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
        if(errors.hasErrors()) {
            return response.invalidFields(Helper.refineErrors(errors));
        }
        return memberService.login(login);
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(@Validated MemberDto.Logout logout, Errors errors) {
        if(errors.hasErrors()) {
            return response.invalidFields(Helper.refineErrors(errors));
        }
        return memberService.logout(logout);
    }

    @PostMapping
    public ResponseEntity postMember(@Valid @RequestBody MemberPostDto memberPostDto) {
        Member createMember = memberService.createMember(mapper.memberPostDtoToMember(memberPostDto));
        return new ResponseEntity<>(mapper.memberToMemberResponse(createMember), HttpStatus.CREATED);
    }

    @PatchMapping
    public ResponseEntity patchMember(@Valid @RequestBody MemberPatchDto memberPatchDto,
                                      Principal principal) {
        Member updateMember = memberService.updateMember(mapper.memberPatchDtoToMember(memberPatchDto), principal.getName());

        return new ResponseEntity<>(mapper.memberToMemberResponse(updateMember), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getMember(Principal principal) {
        Member findMember = memberService.findMemberToEmail(principal.getName());
        return new ResponseEntity<>(mapper.memberToMemberResponse(findMember), HttpStatus.OK);
    }

    @DeleteMapping
    public ResponseEntity deleteMember(Principal principal) {
        memberService.deleteMember(principal.getName());

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
