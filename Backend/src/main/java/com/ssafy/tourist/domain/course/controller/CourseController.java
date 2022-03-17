package com.ssafy.tourist.domain.course.controller;

import com.ssafy.tourist.domain.course.db.entity.Course;
import com.ssafy.tourist.domain.course.request.BookmarkRegisterPostReq;
import com.ssafy.tourist.domain.course.service.CourseService;
import com.ssafy.tourist.global.model.response.BaseResponseBody;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;

@Api("관광지 코스 API")
@Slf4j
@Controller
@RequestMapping("/api/course")
public class CourseController {
    
    @Autowired
    CourseService courseService;

    private static final int SUCCESS = 1;
    private static final int FAIL = -1;

    @ApiOperation(value = "코스 북마크(좋아요) 추가")
    @PostMapping("/bookmark")
    public ResponseEntity<? extends BaseResponseBody> bookmarkRegisterByUser(@RequestBody BookmarkRegisterPostReq bookmarkRegisterPostReq) {
        log.info("bookmarkRegisterByUser - Call");

        courseService.bookmarkRegisterByUser(bookmarkRegisterPostReq);
        return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
    }

    @ApiOperation(value = "코스 북마크(좋아요) 해제")
    @DeleteMapping("/bookmark/{userId}/{courseId}")
    public ResponseEntity<? extends BaseResponseBody> bookmarkRemoveByUser(@ApiParam(value = "회원 구분 번호") @PathVariable("userId") int userId,
                                                                           @ApiParam(value = "코스 구분 번호") @PathVariable("courseId") int courseId) {

        log.info("bookmarkRemoveByUser - Call");

        if (courseService.bookmarkRemoveByUser(userId, courseId) == SUCCESS) {
            return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
        } else {
            log.error("bookmarkRemoveByUser - bookmark doesn't exist");
            return ResponseEntity.status(400).body(BaseResponseBody.of(400, "bookmark doesn't exist"));
        }

    }
}
