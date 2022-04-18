package com.ssafy.tourist.domain.course.service.controller;

import com.ssafy.tourist.domain.course.db.bean.AreaPopularCourse;
import com.ssafy.tourist.domain.course.db.bean.CourseInfo;
import com.ssafy.tourist.domain.course.db.bean.KeywordCourse;
import com.ssafy.tourist.domain.course.request.CourseHitsPostReq;
import com.ssafy.tourist.domain.course.request.CourseRegisterPostReq;
import com.ssafy.tourist.domain.course.response.*;
import com.ssafy.tourist.domain.course.service.CourseService;
import com.ssafy.tourist.global.model.response.BaseResponseBody;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Arrays;
import java.util.List;
import java.util.Random;

@Api("관광지 코스 API")
@Slf4j
@Controller
@RequestMapping("/api/course")
public class CourseController {
    
    @Autowired
    CourseService courseService;

    private static final int SUCCESS = 1;
    private static final int FAIL = -1;

    private static String[] keywords = {"자연","산","바다","강","호수","가을","여름","봄","겨울","전통","체험","공원","역사","힐링","혼자","홀로","음식","식당"};


    @ApiOperation(value = "코스 조회수", notes = "코스 상세보기를 하면 조회수가 증가한다.")
    @PutMapping("/course-hits")
    public ResponseEntity<? extends BaseResponseBody> courseHits (@RequestBody CourseHitsPostReq courseHitsPostReq) {

        log.info("courseHits - Call");

        if(courseService.courseHits(courseHitsPostReq) == SUCCESS) {
            return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
        }else {
            log.error("courseHits - The course doesn't exist.");
            return ResponseEntity.status(404).body(BaseResponseBody.of(404, "The course doesn't exist."));
        }
    }


    @ApiOperation(value = "사용자 코스 추가", notes = "사용자는 코스를 직접 생성할 수 있다.")
    @PostMapping("")
    public ResponseEntity<? extends BaseResponseBody> courseRegister (@RequestBody CourseRegisterPostReq courseRegisterPostReq) {
        log.info("courseRegister - Call");

        if(courseService.courseRegisterByUser(courseRegisterPostReq) == SUCCESS) {
            return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
        }else {
            log.error("Course doesn't exist");
            return ResponseEntity.status(403).body(BaseResponseBody.of(403, "Course doesn't exist"));
        }
    }


    @ApiOperation(value = "인기 코스", notes = "조회수를 기준으로 비회원에게 인기 코스 추천을 제공한다.")
    @GetMapping("/course-hits")
    public ResponseEntity<PopularCourseGetRes> popularCourse (int page, int size) {
        log.info("popularCourse - Call");

        Page<CourseInfo> popularCouseList = courseService.popularCourse(PageRequest.of(page - 1 , size));

        return ResponseEntity.status(200).body(PopularCourseGetRes.of(200, "Success", popularCouseList));
    }


    @ApiOperation(value = "코스 검색하기")
    @GetMapping("/{courseName}")
    public ResponseEntity<CourseSearchGetRes> courseSearch (@ApiParam(value = "코스 명") @PathVariable("courseName") String courseName, int page, int size) {
        log.info("courseSearch - Call");

        Page<CourseInfo> courseSearchList = courseService.courseSearch(courseName, PageRequest.of(page - 1, size));

        return ResponseEntity.status(200).body(CourseSearchGetRes.of(200, "Success", courseSearchList));
    }


    @ApiOperation(value = "사용자 생성 코스 조회")
    @GetMapping("/custom-course/{userId}")
    public ResponseEntity<CourseListGetRes> courseListByUser (@ApiParam(value = "회원 구분 번호") @PathVariable("userId") int userId, int page, int size) {
        log.info("courseListByUser - Call");

        Page<CourseInfo> courseList = courseService.courseListByUser(userId, PageRequest.of(page - 1 , size));

        if(courseList != null && !courseList.isEmpty()) {
            return ResponseEntity.status(200).body(CourseListGetRes.of(200, "Success", courseList));
        } else {
            return ResponseEntity.status(200).body(CourseListGetRes.of(200, "Course List doesn't exist", null));
        }
    }


    @ApiOperation(value = "지역 인기 관광지 조회")
    @GetMapping("/area/{areaName}")
    public ResponseEntity<AreaPopularCourseRes> areaPopularCourseByAreaName(@ApiParam(value = "지역 이름") @PathVariable("areaName") String areaName){
        log.info("areaPopularCourseByAreaName - Call");

        List<AreaPopularCourse> areaPopularCourseList = courseService.areaPopularCourseFind(areaName);

        if(areaPopularCourseList != null && !areaPopularCourseList.isEmpty()){
            return ResponseEntity.status(200).body((AreaPopularCourseRes.of(200,"Success",areaPopularCourseList)));
        }else {
            return ResponseEntity.status(200).body((AreaPopularCourseRes.of(200,"Popular course doesn't exist",null)));
        }
    }


    @ApiOperation(value = "키워드별 코스 추천")
    @GetMapping("/")
    public ResponseEntity<KeywordCourseRes>keywordCourseByKeyword(){
        log.info("keywordCourseByKeyword - call");

        int[] ranNum= new int[3];

        Random rand = new Random();

        for(int i=0; i < 3;i++){
            ranNum[i] = rand.nextInt(18);
            for (int j=0;j<i;j++){
                if(ranNum[i] == ranNum[j]){
                    i--;
                }
            }
        }

        List<KeywordCourse> list1 = courseService.keywordCourseList(keywords[ranNum[0]]);
        List<KeywordCourse> list2 = courseService.keywordCourseList(keywords[ranNum[1]]);
        List<KeywordCourse> list3 = courseService.keywordCourseList(keywords[ranNum[2]]);

        return ResponseEntity.status(200).body((KeywordCourseRes.of(keywords[ranNum[0]],list1,keywords[ranNum[1]],list2,keywords[ranNum[2]],list3,"Success",200)));
    }
}
