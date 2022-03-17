package com.ssafy.tourist.domain.record.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@ApiModel(value = "TourEndPostReq", description = "여행 코스 종료 시 필요한 정보")
public class TourEndPostReq {
    @ApiModelProperty(value = "회원 구분 번호", example = "1")
    private int userId;

    @ApiModelProperty(value = "코스 구분 번호", example = "1")
    private int courseId;
}
