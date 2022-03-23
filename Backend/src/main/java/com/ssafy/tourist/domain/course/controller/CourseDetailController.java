package com.ssafy.tourist.domain.course.controller;

import com.ssafy.tourist.domain.course.db.bean.CourseDetail;
import com.ssafy.tourist.domain.course.db.bean.CourseDetailUser;
import com.ssafy.tourist.domain.course.db.bean.TourTestResult;
import com.ssafy.tourist.domain.course.db.entity.CourseData;
import com.ssafy.tourist.domain.course.response.CourseConnectionDetailGetRes;
import com.ssafy.tourist.domain.course.response.CourseDetailGetRes;
import com.ssafy.tourist.domain.course.response.CourseIsRegisterGetRes;
import com.ssafy.tourist.domain.course.response.CourseRecordDetailGetRes;
import com.ssafy.tourist.domain.course.service.CourseDetailService;
import com.ssafy.tourist.domain.record.db.entity.Record;
import com.ssafy.tourist.domain.tourtest.db.entity.TourTest;
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
    public ResponseEntity<CourseDetailGetRes> courseDetail(@ApiParam(value = "코스 구분 번호") @PathVariable("courseId") int courseId) {
        log.info("courseDetail - Call");

        if(courseDetailService.courseIsRegister(courseId)) {
            List<CourseDetailUser> courseDetailUserList = courseDetailService.courseDataUserDetail(courseId);
            return ResponseEntity.status(200).body(CourseDetailGetRes.of(200, "Success", courseDetailUserList, null));
        }else {
            List<CourseDetail> courseDetailList = courseDetailService.courseDataDetail(courseId);
            return ResponseEntity.status(200).body(CourseDetailGetRes.of(200, "Success", null, courseDetailList));
        }
    }

    @ApiOperation(value = "사용자 생성 여부")
    @GetMapping("/course-log/{courseId}")
    public ResponseEntity<CourseIsRegisterGetRes> courseIsRegister(@ApiParam(value = "코스 구분 번호") @PathVariable("courseId") int courseId) {
        log.info("courseIsRegister - Call");

        boolean isRegister = courseDetailService.courseIsRegister(courseId);

        return ResponseEntity.status(200).body(CourseIsRegisterGetRes.of(200, "Success", isRegister));
    }


    @ApiOperation(value = "코스 여행 레코드(일기) 조회")
    @GetMapping("/course-record/{courseId}")
    public ResponseEntity<CourseRecordDetailGetRes> courseRecordDetail(@ApiParam(value = "코스 구분 번호") @PathVariable("courseId") int courseId) {
        log.info("courseRecordDetail - Call");

        List<Record> courseRecordDetailList = courseDetailService.courseRecordDetail(courseId);

        if (courseRecordDetailList != null && !courseRecordDetailList.isEmpty()) {
            return ResponseEntity.status(200).body(CourseRecordDetailGetRes.of(200, "Success", courseRecordDetailList));
        } else {
            log.error("courseId doesn't exist");
            return ResponseEntity.status(403).body(CourseRecordDetailGetRes.of(403, "courseId doesn't exist", null));
        }
    }


    @ApiOperation(value = "코스 성향 분석")
    @GetMapping("/analysis/{courseId}")
    public ResponseEntity<CourseConnectionDetailGetRes> courseConnectionDetail(@ApiParam(value = "코스 구분 번호") @PathVariable("courseId") int courseId) {
        log.info("courseConnectionDetail - Call");

        List<TourTestResult> courseTourTestResultList = courseDetailService.courseTourTestResultDetail(courseId);

        if(courseTourTestResultList != null && !courseTourTestResultList.isEmpty()) {
            return ResponseEntity.status(200).body(CourseConnectionDetailGetRes.of(200, "Success", courseTourTestResultList));
        }else {
            log.error("Test result doesn't exist");
            return ResponseEntity.status(403).body(CourseConnectionDetailGetRes.of(403, "Test result doesn't exist", null));
        }
    }
}

