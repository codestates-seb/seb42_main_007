package server.member.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import server.member.dto.MemberPatchDto;
import server.member.dto.MemberPostDto;
import server.member.entity.Member;
import server.member.mapper.MemberMapper;
import server.member.service.MemberService;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

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
