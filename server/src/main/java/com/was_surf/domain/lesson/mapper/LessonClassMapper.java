package com.was_surf.domain.lesson.mapper;

import com.was_surf.domain.lesson.domain.LessonClass;
import com.was_surf.domain.lesson.domain.LessonRegister;
import com.was_surf.domain.lesson.dto.*;
import com.was_surf.domain.lesson.dto.LessonRegisterDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface LessonClassMapper {
    LessonClass lessonClassPostDtoToLessonClass(LessonClassDto.Post lessonClassPostDto);

    LessonClass lessonClassPatchDtoToLessonClass(LessonClassDto.Patch lessonClassPatchDto);

    @Mapping(source = "member.memberId", target = "memberId")
    LessonClassDto.Response lessonClassToLessonClassResponseDto(LessonClass lessonClass);

    List<LessonClassDto.Response> lessonClassToLessonClassResponseDtos(List<LessonClass> lessonClasses);

    @Mapping(source = "member.memberId", target = "memberId")
    @Mapping(source = "lessonClass.lessonClassId", target = "lessonClassId")
    List<LessonRegisterDto.Response> memberLessonClassToMemberLessonClassResponseDtos(List<LessonRegister> lessonRegisters);
}
