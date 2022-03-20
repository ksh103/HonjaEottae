package com.ssafy.tourist.domain.record.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.Map;


@Getter
@Setter
@ApiModel(value = "TagRegisterPostReq", description = "여행 레코드 태그 등록 시 필요한 정보")
public class TagRegisterPostReq {
    @ApiModelProperty(value = "여행 레코드(일기) 구분 번호", example = "1")
    private int recordId;

    @ApiModelProperty(value = "코스 구분 번호", example = "1")
    private int courseId;

//    @ApiModelProperty(value = "태그 코드 구분 번호", example = "1")
//    private int code;
//
//    @ApiModelProperty(value = "태그 구분 번호", example = "1")
//    private int tagId;

    @ApiModelProperty(value = "태그 정보")
    private Map<Integer, Integer> tag;

    @ApiModelProperty(value = "태그 선택 여부", example = "true")
    private boolean isSelect;
}
