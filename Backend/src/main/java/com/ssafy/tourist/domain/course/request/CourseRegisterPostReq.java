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

    @ApiModelProperty(value = "코스 명", required = true, example = "힐링 코스")
    private String courseName;

    @ApiModelProperty(value = "코스 개요", required = true, example = "힐링되는 관광지를 소개합니다.")
    private String courseContent;

    @ApiModelProperty(value = "코스 총 거리", required = true, example = "4.5km")
    private String courseDistance;

    @ApiModelProperty(value = "코스 총 소요일", required = true, example = "2박 3일")
    private String courseDays;

    // 관광지
    @ApiModelProperty(value = "관광지 구분 번호", required = true, example = "34")
    private Map<Integer, Integer> touristId;

    @ApiModelProperty(value = "관광지 명", required = true, example = "관광지1")
    private Map<Integer, String> touristName;



}
