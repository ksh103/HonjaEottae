package com.ssafy.tourist.domain.course.controller;

import com.ssafy.tourist.domain.course.response.AreaCountRes;
import com.ssafy.tourist.domain.course.service.AreaCountService;
import com.ssafy.tourist.global.model.response.BaseResponseBody;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Api("지역 API")
@Slf4j
@Controller
@RequestMapping("/api/area")
public class AreaController {

    @Autowired
    AreaCountService areaCountService;

    @ApiOperation(value = "지역별 관광지 개수", notes = "지역별 관광지 개수를 나타낸다.")
    @GetMapping("")
    public ResponseEntity<? extends BaseResponseBody> touristSearch () {
        log.info("AreaCount - Call");
            return ResponseEntity.status(200).body(AreaCountRes.of(200, "Success", areaCountService.searchAll()));

    }

}
