package com.ssafy.tourist.domain.tourtest.controller;

import com.ssafy.tourist.domain.tourtest.service.TourTestService;
import com.ssafy.tourist.global.model.response.BaseResponseBody;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Api("관광지 코스 API")
@Slf4j
@Controller
@RequestMapping("/api/tour-test")
public class TourTestController {

    @Autowired
    TourTestService tourTestService;

    private static final int SUCCESS = 1;
    private static final int FAIL = -1;
    
    @ApiOperation(value = "여행 취향 테스트 결과 저장", notes = "로그인 한 회원은 여행 취향 테스트 결과를 저장한다.")
    @PutMapping("/{userId}/{tourTestId}")
    public ResponseEntity<? extends BaseResponseBody> tourTestResultByUser(@PathVariable @ApiParam(value = "회원 구분 번호", required = true) int userId,
                                                                           @PathVariable @ApiParam(value = "여행 취향 테스트 결과 구분 번호", required = true) int tourTestId) {

        log.info("tourTestResultByUser - Call");

        if(tourTestService.tourTestResultByUser(userId, tourTestId) != FAIL) {
            return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
        }else return ResponseEntity.status(404).body(BaseResponseBody.of(201, "userId doesn't exist"));
    }
}
