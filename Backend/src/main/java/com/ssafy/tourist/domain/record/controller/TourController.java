package com.ssafy.tourist.domain.record.controller;

import com.ssafy.tourist.domain.record.request.TourEndPostReq;
import com.ssafy.tourist.domain.record.request.TouristVisitPostReq;
import com.ssafy.tourist.domain.record.service.TourService;
import com.ssafy.tourist.global.model.response.BaseResponseBody;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Api("코스 시작,종료 기록 및 관광지 방문 API")
@Slf4j
@Controller
@RequestMapping("/api")
public class TourController {

    @Autowired
    TourService tourService;

    private static final int SUCCESS = 1;
    private static final int FAIL = -1;


    @ApiOperation(value = "여행 시작")
    @PostMapping("/tour-start")
    public ResponseEntity<? extends BaseResponseBody> courseStart(int userId, int courseId) {
        log.info("tourStartByUser - Call");

        if(tourService.courseStartByUser(userId, courseId) == SUCCESS) {
            return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
        }else return ResponseEntity.status(404).body(BaseResponseBody.of(403, "userId or courseId doesn't exist"));
    }

    @ApiOperation(value = "여행 종료")
    @PutMapping("/tour-end")
    public ResponseEntity<? extends BaseResponseBody> courseEnd(@RequestBody TourEndPostReq tourEndPostReq) {
        log.info("tourEndByUser - Call");

        if(tourService.courseEndByUser(tourEndPostReq) == SUCCESS) {
            return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
        }else return ResponseEntity.status(404).body(BaseResponseBody.of(403, "userId or courseId doesn't exist"));
    }

    @ApiOperation(value = "코스에 대한 관광지 방문")
    @PutMapping("/tour-stamp")
    public ResponseEntity<? extends BaseResponseBody> touristVisit(@RequestBody TouristVisitPostReq touristVisitPostReq) {
        log.info("tourEndByUser - Call");

        if(tourService.touristVisitByUser(touristVisitPostReq) == SUCCESS) {
            return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
        }else return ResponseEntity.status(404).body(BaseResponseBody.of(403, "There is no travel course in progress."));
    }
}
