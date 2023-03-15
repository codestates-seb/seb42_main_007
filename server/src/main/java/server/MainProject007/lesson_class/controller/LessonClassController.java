package server.MainProject007.lesson_class.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import server.MainProject007.lesson_class.dto.LessonClassPatchDto;
import server.MainProject007.lesson_class.dto.LessonClassPostDto;
import server.MainProject007.lesson_class.entity.LessonClass;
import server.MainProject007.lesson_class.mapper.LessonClassMapper;
import server.MainProject007.lesson_class.service.LessonClassService;
import server.MainProject007.responseDto.MultiResponseEntity;
import server.MainProject007.responseDto.SingleResponseEntity;
import server.MainProject007.utils.UriCreator;

import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

@Slf4j
@RestController
@RequestMapping("/lesson-class")
@RequiredArgsConstructor
@Validated
public class LessonClassController {
    private final static String LESSON_CLASS_DEFAULT_URL = "/lesson-class";
    private final LessonClassMapper mapper;
    private final LessonClassService lessonClassService;

    @PostMapping
    public ResponseEntity postLessonClass(@RequestBody LessonClassPostDto lessonClassPostDto) {
        LessonClass lessonClass = mapper.lessonClassPostDtoToLessonClass(lessonClassPostDto);
        LessonClass createdLessonClass = lessonClassService.createLessonClass(lessonClass);

        URI location = UriCreator.createUri(LESSON_CLASS_DEFAULT_URL, createdLessonClass.getLessonClassId());

        return ResponseEntity.created(location).build();
    }

    @PatchMapping("/{lesson-class-id}")
    public ResponseEntity patchLessonClass(@PathVariable("lesson-class-id") long lessonClassId,
                                           @RequestBody LessonClassPatchDto lessonClassPatchDto) {
        lessonClassPatchDto.setLessonClassId(lessonClassId);

        LessonClass lessonClass = lessonClassService.updateLessonClass(mapper.lessonClassPatchDtoToLessonClass(lessonClassPatchDto));

        return new ResponseEntity<>(mapper.lessonClassToLessonClassResponseDto(lessonClass), HttpStatus.OK);
    }

    @GetMapping("/{lesson-class-id}")
    public ResponseEntity getLessonClass(@PathVariable("lesson-class-id") @Positive long lessonClassId) {
        LessonClass findLessonClass = lessonClassService.findLessonClass(lessonClassId);
        return new ResponseEntity<>(new SingleResponseEntity<>(mapper.lessonClassToLessonClassResponseDto(findLessonClass)), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getLessonClasses(@Positive @RequestParam int page,
                                           @Positive @RequestParam int size) {
        Page<LessonClass> pageLessonClasses = lessonClassService.findLessonClasses(page - 1, size);
        List<LessonClass> listLessonClasses = pageLessonClasses.getContent();

        return new ResponseEntity<>(new MultiResponseEntity<>(mapper.lessonClassToLessonClassResponseDtos(listLessonClasses), pageLessonClasses), HttpStatus.OK);
    }

    @DeleteMapping("/{lesson-class-id}")
    public void deleteLessonClass(@PathVariable("lesson-class-id") @Positive long lessonClassId) {
        lessonClassService.deleteLessonClass(lessonClassId);
    }
}
