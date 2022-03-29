package com.ssafy.tourist.domain.tourtest.controller;

import com.ssafy.tourist.domain.course.db.entity.Course;
import com.ssafy.tourist.domain.tourtest.db.bean.TourTestCourse;
import com.ssafy.tourist.domain.tourtest.request.TourTestResultPostReq;
import com.ssafy.tourist.domain.tourtest.response.TourTestCourseGetRes;
import com.ssafy.tourist.domain.tourtest.response.TourTestResultGetRes;
import com.ssafy.tourist.domain.tourtest.service.TourTestService;
import com.ssafy.tourist.global.model.response.BaseResponseBody;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Api("여행 취향 테스트 API")
@Slf4j
@Controller
@RequestMapping("/api/tour-test")
public class TourTestController {

    @Autowired
    TourTestService tourTestService;

    private static final int SUCCESS = 1;
    private static final int NONE = 2;
    private static final int FAIL = -1;


    @ApiOperation(value = "여행 취향 테스트 결과 저장", notes = "로그인 한 사용자는 여행 취향 테스트 결과를 저장한다.")
    @PutMapping("")
    public ResponseEntity<? extends BaseResponseBody> tourTestResultByUser(@RequestBody TourTestResultPostReq tourTestResultPostReq) {

        log.info("tourTestResultByUser - Call");

        int userId = tourTestResultPostReq.getUserId();
        int tourTestId = tourTestResultPostReq.getTourTestId();

        if (userId != 0 && tourTestId != 0) {
            if (tourTestService.tourTestResultByUser(userId, tourTestId) == SUCCESS) {
                return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
            }
        } else if (userId == 0 && tourTestId != 0) {
            if (tourTestService.tourTestResultByUser(userId, tourTestId) == NONE) {
                return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
            }
        }
        return ResponseEntity.status(404).body(BaseResponseBody.of(404, "Error"));
    }

    @ApiOperation(value = "여행 취향 테스트 결과 추천 코스", notes = "여행 취향 테스트 결과를 바탕으로 코스를 추천한다.")
    @GetMapping("/{courseId}")
    public ResponseEntity<TourTestCourseGetRes> tourTestCourseResultByUser(@ApiParam(value = "코스 구분 번호") @PathVariable("courseId") int courseId) {
        log.info("tourTestCourseResultByUser - Call");

        List<TourTestCourse> tourTestCourseList =  tourTestService.tourTestCourseByUser(courseId);

        if(tourTestCourseList != null && !tourTestCourseList.isEmpty()) {
            return ResponseEntity.status(201).body(TourTestCourseGetRes.of(200, "Success", tourTestCourseList));
        }else {
            log.error("Course List doesn't exist");
            return ResponseEntity.status(403).body(TourTestCourseGetRes.of(403, "Course List doesn't exist", null));
        }
    }

    @ApiOperation(value = "여행 취향 테스트 결과 합계", notes = "여행 취향 테스트 결과 합계 정보를 반환합니다.")
    @GetMapping("")
    public ResponseEntity<TourTestResultGetRes> tourTestResult () {
        log.info("tourTestResult - Call");

        List<Integer> tourTestResultList = tourTestService.tourTestResult();

        if(tourTestResultList != null && !tourTestResultList.isEmpty()) {
            return ResponseEntity.status(201).body(TourTestResultGetRes.of(200, "Success", tourTestResultList));
        }else {
            log.error("Result doesn't exist");
            return ResponseEntity.status(403).body(TourTestResultGetRes.of(403, "Result doesn't exist", null));
        }
    }
}
