package com.ssafy.tourist.domain.course.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Map;


@Getter
@Setter
@ApiModel(value = "CourseRegisterPostReq", description = "사용자 코스 등록 정보")
public class CourseRegisterPostReq {
    // 코스
    @ApiModelProperty(value = "회원 코드", required = true, example = "3")
    private int userId;

    @ApiModelProperty(value = "코스 명", required = true, example = "3")
    private String courseName;

    @ApiModelProperty(value = "코스 개요", required = true, example = "3")
    private String courseContent;

    @ApiModelProperty(value = "코스 총 거리", required = true, example = "3")
    private String courseDistance;

    @ApiModelProperty(value = "코스 총 소요일", required = true, example = "3")
    private String courseDays;

    // 관광지
    @ApiModelProperty(value = "관광지 명")
    private Map<Integer, String> courseDataName;

    @ApiModelProperty(value = "코스에 등록된 관광지 주소")
    private Map<Integer, String> courseAddress;

    @ApiModelProperty(value = "코스에 등록된 관광지 위도")
    private Map<Integer, Double> courseLat;

    @ApiModelProperty(value = "코스에 등록된 관광지 경도")
    private Map<Integer, Double> courseLng;
}
