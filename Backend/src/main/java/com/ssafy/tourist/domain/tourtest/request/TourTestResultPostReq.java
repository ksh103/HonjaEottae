package com.ssafy.tourist.domain.tourtest.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;



@Getter
@Setter
@ApiModel(value = "TourTestResultPostReq", description = "여행 성향 테스트 결과 반영 정보")
public class TourTestResultPostReq {
    @ApiModelProperty(value = "회원 구분 번호", example = "1")
    private int userId;

    @ApiModelProperty(value = "여행 취향 테스트 결과 구분 번호", example = "1")
    private int tourTestId;
}
