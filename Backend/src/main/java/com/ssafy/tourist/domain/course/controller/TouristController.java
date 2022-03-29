package com.ssafy.tourist.domain.course.controller;

import com.ssafy.tourist.domain.course.db.entity.Tourist;
import com.ssafy.tourist.domain.course.response.TouristLocationGetRes;
import com.ssafy.tourist.domain.course.response.TouristSearchGetRes;
import com.ssafy.tourist.domain.course.service.TouristService;
import com.ssafy.tourist.global.model.response.BaseResponseBody;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@Api("관광지 API")
@Slf4j
@Controller
@RequestMapping("/api/tourist")
public class TouristController {

    @Autowired
    TouristService touristService;

    private static final int SUCCESS = 1;
    private static final int FAIL = -1;


    @ApiOperation(value = "관광지 검색", notes = "코스 생성 시, 관광지 검색을 통해 관광지를 추가한다.")
    @GetMapping("/{keywords}")
    public ResponseEntity<TouristSearchGetRes> touristSearch (@ApiParam(value = "검색 키워드") @PathVariable("keywords") String keywords, int page, int size) {
        log.info("touristSearch - Call");

        Page<Tourist> touristSearchList = touristService.touristSearchByUser(keywords, PageRequest.of(page- 1, size));

        if(touristSearchList != null && !touristSearchList.isEmpty()) {
            return ResponseEntity.status(200).body(TouristSearchGetRes.of(200, "Success", touristSearchList));
        } else {
            log.error("Keyword  doesn't exist");
            return ResponseEntity.status(403).body(TouristSearchGetRes.of(403, "Keyword  doesn't exist", null));
        }
    }

    @ApiOperation(value = "위치에 따른 인근 관광지 조회", notes = "사용자 위치(위도, 경도)를 기반으로 근처 관광지를 조회한다.")
    @GetMapping("/{lat}/{lng}")
    public ResponseEntity<TouristLocationGetRes> locationTouristList (@ApiParam(value = "위도") @PathVariable("lat") double lat,
                                                                      @ApiParam(value = "경도") @PathVariable("lng") double lng) {
        log.info("locationTouristList - Call");

        List<Tourist> locationTouristList = touristService.locationTouristByUser(lat, lng);

        if(locationTouristList != null && !locationTouristList.isEmpty()) {
            return ResponseEntity.status(200).body(TouristLocationGetRes.of(200, "Success", locationTouristList));
        } else {
            log.error("Tourist doesn't exist");
            return ResponseEntity.status(403).body(TouristLocationGetRes.of(403, "Keyword  doesn't exist", null));
        }
    }


    @ApiOperation(value = "관광지 이미지 확인")
    @GetMapping(value = "/image/{fileId}/{touristId}", produces = MediaType.IMAGE_JPEG_VALUE)
    public ResponseEntity<Resource> touristImage (@ApiParam(value = "파일 구분 번호") @PathVariable("fileId") int  fileId,
                                                  @ApiParam(value = "관광지 구분 번호") @PathVariable("touristId") int  touristId) {

        String filePath = touristService.getTouristImgPath(fileId, touristId);

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
