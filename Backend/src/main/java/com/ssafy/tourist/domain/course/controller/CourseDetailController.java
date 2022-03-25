package com.ssafy.tourist.domain.course.controller;

import com.ssafy.tourist.domain.course.db.bean.CourseDetail;
import com.ssafy.tourist.domain.course.db.bean.CourseTagDetail;
import com.ssafy.tourist.domain.course.db.bean.CourseTourTestResultDetail;
import com.ssafy.tourist.domain.course.db.bean.CourseTouristDetail;
import com.ssafy.tourist.domain.course.db.entity.CourseData;
import com.ssafy.tourist.domain.course.response.*;
import com.ssafy.tourist.domain.course.service.CourseDetailService;
import com.ssafy.tourist.domain.record.db.entity.Record;
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



    @ApiOperation(value = "코스 상세보기 - 사용자 생성 코스", notes = "코스에 대한 정보와 코스에 등록된 관광지에 대한 정보를 제공한다.")
    @GetMapping("/user/{courseId}")
    public ResponseEntity<CourseDetailGetRes> courseDetailUser (@ApiParam(value = "코스 구분 번호") @PathVariable("courseId") int courseId) {
        log.info("courseDetail - Call");

        List<CourseDetail> courseDetailList = courseDetailService.courseDetail(courseId);
        List<CourseTouristDetail> courseTouristDetailList = courseDetailService.courseDataDetail(courseId);

        if(courseDetailList != null && !courseDetailList.isEmpty() && courseTouristDetailList != null && !courseDetailList.isEmpty()) {
            return ResponseEntity.status(200).body(CourseDetailGetRes.of(200, "Success", courseDetailList, courseTouristDetailList));
        }else {
            log.error("courseId doesn't exist");
            return ResponseEntity.status(403).body(CourseDetailGetRes.of(403, "courseId doesn't exist", null, null));
        }
    }


    @ApiOperation(value = "코스 여행 레코드(일기) 조회")
    @GetMapping("/course-record/{courseId}")
    public ResponseEntity<CourseRecordDetailGetRes> courseRecordDetail(@ApiParam(value = "코스 구분 번호") @PathVariable("courseId") int courseId) {
        log.info("courseRecordDetail - Call");

        List<Record> courseRecordDetailList = courseDetailService.courseRecordDetail(courseId);

        if (courseRecordDetailList != null && !courseRecordDetailList.isEmpty()) {
            return ResponseEntity.status(200).body(CourseRecordDetailGetRes.of(200, "Success", courseRecordDetailList));
        } else {
            return ResponseEntity.status(200).body(CourseRecordDetailGetRes.of(200, "Record doesn't exist", null));
        }
    }


    @ApiOperation(value = "코스 성향 분석")
    @GetMapping("/analysis/{courseId}")
    public ResponseEntity<CourseTourTestResultDetailGetRes> courseTourTestDetail(@ApiParam(value = "코스 구분 번호") @PathVariable("courseId") int courseId) {
        log.info("courseTourTestDetail - Call");

        List<CourseTourTestResultDetail> courseTourTestResultList = courseDetailService.courseTourTestResultDetail(courseId);

        if(courseTourTestResultList != null && !courseTourTestResultList.isEmpty()) {
            return ResponseEntity.status(200).body(CourseTourTestResultDetailGetRes.of(200, "Success", courseTourTestResultList));
        }else {
            return ResponseEntity.status(200).body(CourseTourTestResultDetailGetRes.of(200, "Test Result doesn't exist", null));
        }
    }

    @ApiOperation(value = "코스 태그")
    @GetMapping("/course-tag/{courseId}")
    public ResponseEntity<CourseTagDetailGetRes> courseTagDetail(@ApiParam(value = "코스 구분 번호") @PathVariable("courseId") int courseId) {
        log.info("courseTagDetail - Call");

        List<CourseTagDetail> courseTagDetailList = courseDetailService.courseTagDetail(courseId);

        if(courseTagDetailList != null && !courseTagDetailList.isEmpty()) {
            return ResponseEntity.status(200).body(CourseTagDetailGetRes.of(200, "Success", courseTagDetailList));
        }else {
            return ResponseEntity.status(200).body(CourseTagDetailGetRes.of(200, "Tag doesn't exist", null));
        }
    }

    @ApiOperation(value = "새로운 인연을 만날 확률(%)")
    @GetMapping("/connection/{courseId}")
    public ResponseEntity<CourseConnectionGetRes> courseConnectionDetail(@ApiParam(value = "코스 구분 번호") @PathVariable("courseId") int courseId) {
       log.info("courseConnectionDetail - Call");

        double percentage = courseDetailService.courseConnection(courseId);

        if(percentage != 0) {
            return ResponseEntity.status(200).body(CourseConnectionGetRes.of(200, "Success", percentage));
        }else {
            return ResponseEntity.status(200).body(CourseConnectionGetRes.of(200, "Result doesn't exist", 0));
        }
    }
}

