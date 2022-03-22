package com.ssafy.tourist.domain.course.controller;

import com.ssafy.tourist.domain.course.db.entity.Tourist;
import com.ssafy.tourist.domain.course.response.TouristSearchGetRes;
import com.ssafy.tourist.domain.course.service.TouristService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Api("관광지 API")
@Slf4j
@Controller
@RequestMapping("/api/tourist")
public class TouristController {

    @Autowired
    TouristService touristService;

    private static final int SUCCESS = 1;
    private static final int FAIL = -1;


    @ApiOperation(value = "관광지 검색")
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
}
