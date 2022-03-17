package com.ssafy.tourist.domain.record.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;

@Getter
@Setter
@ApiModel(value = "RecordRegisterPostReq", description = "여행 레코드(일기) 등록 시 필요한 정보")
public class RecordRegisterPostReq {
    @ApiModelProperty(value = "코스 구분 번호", example = "1")
    private int courseId;

    @ApiModelProperty(value = "회원 코드", required = true, example = "3")
    private int userId;

    @ApiModelProperty(value = "여행 레코드(일기) 내용", required = true, example = "재밌다!")
    private String recordContent;
}
