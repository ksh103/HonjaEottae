package com.ssafy.tourist.domain.course.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;


@Getter
@Setter
@ApiModel(value = "CourseHitsPostReq", description = "코스 조회 카운트 정보")
public class CourseHitsPostReq {
    @ApiModelProperty(value = "코스 구분 번호", example = "1")
    private int courseId;
}
