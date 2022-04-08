package com.ssafy.tourist.domain.record.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;


@Getter
@Setter
@ApiModel(value = "RecordModifyPostReq", description = "여행 레코드(일기) 수정 시 필요한 정보")
public class RecordModifyPostReq {
    @ApiModelProperty(value = "여행 레코드(일기) 구분 번호", example = "1")
    @Column(name = "record_id")
    private int recordId;

    @ApiModelProperty(value = "여행 레코드(일기) 내용", required = true, example = "재밌다!")
    @Column(name = "record_content")
    private String recordContent;
}
