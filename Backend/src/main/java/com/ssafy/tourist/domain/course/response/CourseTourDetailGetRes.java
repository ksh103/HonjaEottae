package com.ssafy.tourist.domain.course.response;

import com.ssafy.tourist.domain.course.db.bean.CourseTagDetail;
import com.ssafy.tourist.global.model.response.BaseResponseBody;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@ApiModel(value = "CourseTourDetailGetRes", description = "여행 시작 사용자 수 응답")
public class CourseTourDetailGetRes extends BaseResponseBody {
    @ApiModelProperty(value = "여행 시작 사용자 수 정보")
    int count = 0;

    public static CourseTourDetailGetRes of (Integer statusCode, String message, int count) {
        CourseTourDetailGetRes res = new CourseTourDetailGetRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setCount(count);

        return res;
    }

}
