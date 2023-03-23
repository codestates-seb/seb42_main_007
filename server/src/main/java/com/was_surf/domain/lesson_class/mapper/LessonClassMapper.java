package com.was_surf.domain.lesson_class.mapper;

import com.was_surf.domain.lesson_class.domain.LessonClass;
import com.was_surf.domain.lesson_register.domain.LessonRegister;
import com.was_surf.domain.lesson_class.dto.*;
import com.was_surf.domain.lesson_register.dto.LessonRegisterDto;
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
