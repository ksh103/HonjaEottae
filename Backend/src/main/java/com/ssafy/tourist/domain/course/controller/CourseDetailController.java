package com.ssafy.tourist.domain.course.controller;

import com.querydsl.core.Tuple;
import com.ssafy.tourist.domain.course.db.entity.Course;
import com.ssafy.tourist.domain.course.db.entity.CourseData;
import com.ssafy.tourist.domain.course.response.CourseDetailGetRes;
import com.ssafy.tourist.domain.course.response.CourseIsRegisterGetRes;
import com.ssafy.tourist.domain.course.response.CourseListGetRes;
import com.ssafy.tourist.domain.course.response.PopularCourseGetRes;
import com.ssafy.tourist.domain.course.service.CourseDetailService;
import com.ssafy.tourist.global.model.response.BaseResponseBody;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Api("코스 상세보기 API")
@Slf4j
@Controller
@RequestMapping("/api/course-detail")
public class CourseDetailController {

    @Autowired
    CourseDetailService courseDetailService;


    @ApiOperation(value = "코스 상세보기", notes = "코스에 대한 정보와 코스에 등록된 관광지에 대한 정보를 제공한다.")
    @GetMapping("/{courseId}")
    public ResponseEntity<CourseDetailGetRes> courseDetail (@ApiParam(value = "코스 구분 번호") @PathVariable("courseId") int courseId) {
        log.info("courseDetail - Call");

        List<CourseData> courseDataDetailList = courseDetailService.courseDataDetail(courseId);

        if(courseDataDetailList != null && !courseDataDetailList.isEmpty()) {
            return ResponseEntity.status(200).body(CourseDetailGetRes.of(200, "Success", courseDataDetailList));
        } else {
            log.error("Course List doesn't exist");
            return ResponseEntity.status(403).body(CourseDetailGetRes.of(403, "Course List doesn't exist", null));
        }
    }

    @ApiOperation(value = "사용자 생성 여부")
    @GetMapping("/course-log/{courseId}")
    public ResponseEntity<CourseIsRegisterGetRes> courseIsRegister (@ApiParam(value = "코스 구분 번호") @PathVariable("courseId") int courseId) {
        log.info("courseIsRegister - Call");

        boolean isRegister = courseDetailService.courseIsRegister(courseId);

        return ResponseEntity.status(200).body(CourseIsRegisterGetRes.of(200, "Success", isRegister));
    }
}
