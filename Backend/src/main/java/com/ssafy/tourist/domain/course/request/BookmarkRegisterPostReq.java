package com.ssafy.tourist.domain.course.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@ApiModel(value = "BookmarkRegisterPostReq", description = "코스 북마크 정보")
public class BookmarkRegisterPostReq {
    @ApiModelProperty(value = "회원 구분 번호", example = "1")
    private int userId;

    @ApiModelProperty(value = "코스 구분 번호", example = "1")
    private int courseId;
}
