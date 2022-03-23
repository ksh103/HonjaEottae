package com.ssafy.tourist.domain.course.response;

import com.ssafy.tourist.domain.course.db.entity.CourseData;
import com.ssafy.tourist.global.model.response.BaseResponseBody;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@ApiModel(value = "CourseIsRegisterGetRes", description = "코스 사용자 생성 여부 응답")
public class CourseIsRegisterGetRes extends BaseResponseBody {
    @ApiModelProperty(value = "코스 사용자 생성 여부 정보")
    boolean isRegister = false;

    public static CourseIsRegisterGetRes of (Integer statusCode, String message, boolean isRegister) {
        CourseIsRegisterGetRes res = new CourseIsRegisterGetRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setRegister(isRegister);

        return res;
    }
}
