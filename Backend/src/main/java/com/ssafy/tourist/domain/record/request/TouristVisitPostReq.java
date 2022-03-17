package com.ssafy.tourist.domain.record.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@ApiModel(value = "TouristVisitPostReq", description = "여행 코스 관광지 방문 체크")
public class TouristVisitPostReq {
    @ApiModelProperty(value = "회원 구분 번호", example = "1")
    private int userId;

    @ApiModelProperty(value = "코스 구분 번호", example = "1")
    private int courseId;

    @ApiModelProperty(value = "코스에 등록된 관광지 순차 번호", example = "1")
    private int courseDataId;
}
