package com.was_surf.domain.lesson.mapper;

import com.was_surf.domain.lesson.domain.LessonRegister;
import com.was_surf.domain.lesson.dto.LessonRegisterDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface LessonRegisterMapper {
    LessonRegister lessonRegisterPostDtoToLessonRegister(LessonRegisterDto.Post lessonRegisterPostDto);

    LessonRegister lessonRegisterPatchDtoToLessonRegister(LessonRegisterDto.Patch lessonRegisterPatchDto);

    @Mapping(source = "member.memberId", target = "memberId")
    @Mapping(source = "lessonClass.lessonClassId", target = "lessonClassId")
    LessonRegisterDto.Response lessonRegisterToLessonRegisterResponseDto(LessonRegister lessonRegister);

    List<LessonRegisterDto.Response> lessonRegisterToLessonRegisterResponseDtos(List<LessonRegister> lessonRegisters);
}
