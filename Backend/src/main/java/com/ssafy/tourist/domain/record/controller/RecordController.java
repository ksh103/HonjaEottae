package com.ssafy.tourist.domain.record.controller;

import com.ssafy.tourist.domain.record.db.bean.RecordWriteList;
import com.ssafy.tourist.domain.record.db.entity.Record;
import com.ssafy.tourist.domain.record.request.RecordModifyPostReq;
import com.ssafy.tourist.domain.record.request.RecordRegisterPostReq;
import com.ssafy.tourist.domain.record.response.RecordRegisterPostRes;
import com.ssafy.tourist.domain.record.response.RecordWriteListGetRes;
import com.ssafy.tourist.domain.record.response.TagListGetRes;
import com.ssafy.tourist.domain.record.service.RecordService;
import com.ssafy.tourist.global.model.response.BaseResponseBody;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
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
    @PostMapping(value = "" , consumes= {MediaType.APPLICATION_JSON_VALUE, MediaType.MULTIPART_FORM_DATA_VALUE})
    public ResponseEntity<RecordRegisterPostRes> recordRegister
            (@RequestPart(value = "recordRegister") RecordRegisterPostReq recordRegisterPostReq, MultipartHttpServletRequest request) {

        log.info("recordRegister - Call");

        try {
            if(recordService.recordRegisterByUser(recordRegisterPostReq, request) == SUCCESS) {

                int recordId = recordService.recordIdPostRes(recordRegisterPostReq.getCourseId(), recordRegisterPostReq.getUserId());

                return ResponseEntity.status(201).body(RecordRegisterPostRes.of(201, "Success", recordId));
            }else {
                return ResponseEntity.status(400).body(RecordRegisterPostRes.of(400, "Failed", 0));
            }

        } catch (IOException e) {
            log.error(e.getMessage());
            return ResponseEntity.status(400).body(RecordRegisterPostRes.of(400, "Failed", 0));
        }
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
    @GetMapping("/{userId}")
    public ResponseEntity<RecordWriteListGetRes> recordWriteList (@ApiParam(value = "회원 구분 번호") @PathVariable("userId") int userId) {
        log.info("recordWriteList - Call");

        List<RecordWriteList> recordWriteList = recordService.recordWriteListByUser(userId);

        if (recordWriteList != null && !recordWriteList.isEmpty()) {
            return ResponseEntity.status(200).body(RecordWriteListGetRes.of(200, "Success", recordWriteList));
        }else {
            log.error("recordWriteList - Record doesn't exist.");
            return ResponseEntity.status(200).body(RecordWriteListGetRes.of(200, "Record doesn't exist", null));
        }
    }

    @ApiOperation(value = "여행 레코드(일기) 이미지 확인")
    @GetMapping(value = "/image/{fileId}/{recordId}/{courseId}", produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<Resource> touristImage (@ApiParam(value = "파일 구분 번호") @PathVariable("fileId") int  fileId,
                                                  @ApiParam(value = "여행 레코드(일기) 구분 번호") @PathVariable("recordId") int  recordId,
                                                  @ApiParam(value = "코스 구분 번호") @PathVariable("courseId") int  courseId) {

        String filePath = recordService.getRecordImgPath(fileId, recordId, courseId);

        Resource resource = new FileSystemResource(filePath);
        if (!resource.exists()) return new ResponseEntity<>(HttpStatus.NOT_FOUND);

        HttpHeaders headers = new HttpHeaders();
        Path path = null;

        try {
            path = Paths.get(filePath);
            headers.add("Content-Type", Files.probeContentType(path));
        } catch (IOException e) {
            log.error(e.getMessage());
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        return new ResponseEntity<>(resource, headers, HttpStatus.OK);
    }
}
 