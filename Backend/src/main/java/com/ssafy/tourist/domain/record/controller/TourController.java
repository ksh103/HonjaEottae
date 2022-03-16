package com.ssafy.tourist.domain.record.controller;

import com.ssafy.tourist.domain.record.service.TourService;
import com.ssafy.tourist.global.model.response.BaseResponseBody;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Api("코스-관광지 방문 기록 API")
@Slf4j
@Controller
@RequestMapping("/api/tour")
public class TourController {

    @Autowired
    TourService tourService;

    private static final int SUCCESS = 1;
    private static final int FAIL = -1;


    @ApiOperation(value = "여행 시작")
    @PostMapping("/start")
    public ResponseEntity<? extends BaseResponseBody> tourStartByUser(int userId, int courseId) {
        log.info("tourStartByUser - Call");

        tourService.tourStartByUser(userId, courseId);
        return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
    }

    @ApiOperation(value = "여행 종료")
    @PutMapping("/end")
    public ResponseEntity<? extends BaseResponseBody> tourEndByUser(int userId, int courseId) {
        log.info("tourEndByUser - Call");

        if(tourService.tourEndByUser(userId, courseId) != FAIL) {
            return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
        }else return ResponseEntity.status(404).body(BaseResponseBody.of(201, "userId or courseId doesn't exist"));
    }
}
