package com.ssafy.tourist.domain.record.controller;

import com.ssafy.tourist.domain.record.request.RecordRegisterPostReq;
import com.ssafy.tourist.domain.record.service.RecordService;
import com.ssafy.tourist.global.model.response.BaseResponseBody;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Api("여행 레코드(일기) API")
@Slf4j
@Controller
@RequestMapping("/api/record")
public class RecordController {

    @Autowired
    RecordService recordService;

    private static final int SUCCESS = 1;
    private static final int FAIL = -1;

    @ApiOperation(value = "여행 레코드(일기) 등록")
    @PostMapping("")
    public ResponseEntity<? extends BaseResponseBody> recordRegister (RecordRegisterPostReq recordRegisterPostReq) {
        log.info("recordRegister - Call");

        if(recordService.recordRegisterByUser(recordRegisterPostReq) == SUCCESS) {
            return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
        }else return ResponseEntity.status(404).body(BaseResponseBody.of(403, "There is no completed course."));
    }
}
