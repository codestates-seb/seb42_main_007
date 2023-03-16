package com.was_surf.domain.lesson_class.mapper;

import com.was_surf.domain.lesson_class.domain.LessonClass;
import org.mapstruct.Mapper;
import com.was_surf.domain.lesson_class.dto.LessonClassPatchDto;
import com.was_surf.domain.lesson_class.dto.LessonClassPostDto;
import com.was_surf.domain.lesson_class.dto.LessonClassResponseDto;

import java.util.List;

@Mapper(componentModel = "spring")
public interface LessonClassMapper {
    LessonClass lessonClassPostDtoToLessonClass(LessonClassPostDto lessonClassPostDto);

    LessonClass lessonClassPatchDtoToLessonClass(LessonClassPatchDto lessonClassPatchDto);

    LessonClassResponseDto lessonClassToLessonClassResponseDto(LessonClass lessonClass);

    List<LessonClassResponseDto> lessonClassToLessonClassResponseDtos(List<LessonClass> lessonClasses);
}
