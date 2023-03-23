package server.MainProject007.lesson_class.mapper;

import org.mapstruct.Mapper;
import server.MainProject007.lesson_class.dto.LessonClassPatchDto;
import server.MainProject007.lesson_class.dto.LessonClassPostDto;
import server.MainProject007.lesson_class.dto.LessonClassResponseDto;
import server.MainProject007.lesson_class.entity.LessonClass;

import java.util.List;

@Mapper(componentModel = "spring")
public interface LessonClassMapper {
    LessonClass lessonClassPostDtoToLessonClass(LessonClassPostDto lessonClassPostDto);

    LessonClass lessonClassPatchDtoToLessonClass(LessonClassPatchDto lessonClassPatchDto);

    LessonClassResponseDto lessonClassToLessonClassResponseDto(LessonClass lessonClass);

    List<LessonClassResponseDto> lessonClassToLessonClassResponseDtos(List<LessonClass> lessonClasses);
}
