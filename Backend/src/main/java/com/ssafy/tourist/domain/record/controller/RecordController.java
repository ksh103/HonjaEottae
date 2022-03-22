package com.ssafy.tourist.domain.record.controller;

import com.ssafy.tourist.domain.record.db.entity.Record;
import com.ssafy.tourist.domain.record.request.RecordModifyPostReq;
import com.ssafy.tourist.domain.record.request.RecordRegisterPostReq;
import com.ssafy.tourist.domain.record.response.RecordWriteListGetRes;
import com.ssafy.tourist.domain.record.response.TagListGetRes;
import com.ssafy.tourist.domain.record.service.RecordService;
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

@Api("여행 레코드(일기) API")
@Slf4j
@Controller
@RequestMapping("/api/record")
public class RecordController {

    @Autowired
    RecordService recordService;

    private static final int SUCCESS = 1;
    private static final int FAIL = -1;

    @ApiOperation(value = "여행 레코드(일기) 등록", notes = "코스 방문을 시작하면 여행 레코드(일기) 작성이 가능하다.")
    @PostMapping("")
    public ResponseEntity<? extends BaseResponseBody> recordRegister (RecordRegisterPostReq recordRegisterPostReq) {
        log.info("recordRegister - Call");

        if(recordService.recordRegisterByUser(recordRegisterPostReq) == SUCCESS) {
            return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
        }else return ResponseEntity.status(404).body(BaseResponseBody.of(404, "There is no completed course."));
    }

    @ApiOperation(value = "여행 레코드(일기) 수정")
    @PutMapping("")
    public ResponseEntity<? extends BaseResponseBody> recordModify (@RequestBody RecordModifyPostReq recordModifyPostReq) {
        log.info("recordModify - Call");

        if (recordService.recordModifyByUser(recordModifyPostReq) == SUCCESS) {
            return ResponseEntity.status(201).body(BaseResponseBody.of(201, "Success"));
        } else {
            log.error("qnaQuestionModify - This questionId doesn't exist.");
            return ResponseEntity.status(404).body(BaseResponseBody.of(404, "This recordId doesn't exist."));
        }
    }

    @ApiOperation(value = "사용자가 작성한 여행 레코드(일기) 조회", notes = "사용자가 코스 방문 시, 작성했던 여행 레코드(일기)는 마이페이지에서 조회가 가능하다.")
    @GetMapping("/{userId}/{courseId}")
    public ResponseEntity<RecordWriteListGetRes> recordWriteList (@ApiParam(value = "회원 구분 번호") @PathVariable("userId") int userId,
                                                                  @ApiParam(value = "코스 구분 번호") @PathVariable("courseId") int courseId) {
        log.info("recordWriteList - Call");

        List<Record> recordWriteList = recordService.recordWriteListByUser(userId, courseId);

        if (recordWriteList != null && !recordWriteList.isEmpty()) {
            return ResponseEntity.status(201).body(RecordWriteListGetRes.of(200, "Success", recordWriteList));
        }else {
            log.error("recordWriteList - Record doesn't exist.");
            return ResponseEntity.status(400).body(RecordWriteListGetRes.of(400, "Record doesn't exist", null));
        }
    }
}
 