package com.ssafy.tourist.domain.course.controller;

import com.ssafy.tourist.domain.course.db.entity.Course;
import com.ssafy.tourist.domain.course.request.BookmarkRegisterPostReq;
import com.ssafy.tourist.domain.course.response.BookmarkCourseGetRes;
import com.ssafy.tourist.domain.course.service.BookmarkService;
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

@Api("코스 북마크 API")
@Slf4j
@Controller
@RequestMapping("/api/course")
public class BookmarkController {

    @Autowired
    BookmarkService bookmarkService;

    private static final int SUCCESS = 1;
    private static final int FAIL = -1;

    @ApiOperation(value = "코스 북마크(좋아요) 추가", notes = "사용자는 코스를 북마크(좋아요) 한다.")
    @PostMapping("/bookmark")
    public ResponseEntity<? extends BaseResponseBody> bookmarkRegister (@RequestBody BookmarkRegisterPostReq bookmarkRegisterPostReq) {
        log.info("bookmarkRegisterByUser - Call");

        bookmarkService.bookmarkRegisterByUser(bookmarkRegisterPostReq);
        return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
    }

    @ApiOperation(value = "코스 북마크(좋아요) 해제", notes = "사용자는 코스 북마크를 언제든지 해제가 가능하다.")
    @DeleteMapping("/bookmark/{userId}/{courseId}")
    public ResponseEntity<? extends BaseResponseBody> bookmarkRemove (@ApiParam(value = "회원 구분 번호") @PathVariable("userId") int userId,
                                                                      @ApiParam(value = "코스 구분 번호") @PathVariable("courseId") int courseId) {

        log.info("bookmarkRemoveByUser - Call");

        if (bookmarkService.bookmarkRemoveByUser(userId, courseId) == SUCCESS) {
            return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
        } else {
            log.error("bookmarkRemoveByUser - bookmark doesn't exist");
            return ResponseEntity.status(400).body(BaseResponseBody.of(400, "bookmark doesn't exist"));
        }

    }

    @ApiOperation(value = "북마크한 코스 조회", notes = "사용자가 북마크한 코스를 조회한다.")
    @GetMapping("/bookmark-list/{userId}")
    public ResponseEntity<BookmarkCourseGetRes> bookmarkList (@ApiParam(value = "회원 구분 번호") @PathVariable("userId") int userId) {

        log.info("bookmarkList - Call");

        List<Course> bookmarkCourseList = bookmarkService.bookmarkCourse(userId);

        if(bookmarkCourseList != null && !bookmarkCourseList.isEmpty()) {
            return ResponseEntity.status(200).body(BookmarkCourseGetRes.of(200, "Success", bookmarkCourseList));
        }else {
            return ResponseEntity.status(200).body(BookmarkCourseGetRes.of(200, "bookmark doesn't exist", null));
        }
    }
}
