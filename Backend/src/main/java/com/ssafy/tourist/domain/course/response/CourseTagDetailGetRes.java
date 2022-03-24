package com.ssafy.tourist.domain.course.response;

import com.ssafy.tourist.domain.course.db.bean.CourseTagDetail;
import com.ssafy.tourist.domain.course.db.entity.CourseData;
import com.ssafy.tourist.global.model.response.BaseResponseBody;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@ApiModel(value = "CourseTagDetailGetRes", description = "코스 태그 응답")
public class CourseTagDetailGetRes extends BaseResponseBody {
    @ApiModelProperty(value = "코스 태그 정보")
    List<CourseTagDetail> list = null;

    public static CourseTagDetailGetRes of (Integer statusCode, String message, List<CourseTagDetail> list) {
        CourseTagDetailGetRes res = new CourseTagDetailGetRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setList(list);

        return res;
    }

}
