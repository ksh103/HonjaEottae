package com.ssafy.tourist.domain.course.response;

import com.ssafy.tourist.domain.course.db.bean.AreaPopularCourse;
import com.ssafy.tourist.global.model.response.BaseResponseBody;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@ApiModel(value = "areaPopularCourseRes", description = "지역 인기 코스 응답")
public class AreaPopularCourseRes extends BaseResponseBody {
    @ApiModelProperty(value = "지역별 인기 코스 정보")
    List<AreaPopularCourse> list = new ArrayList<>();

    public static AreaPopularCourseRes of (Integer statusCode, String message, List<AreaPopularCourse> list){
        AreaPopularCourseRes res = new AreaPopularCourseRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setList(list);
        return res;
    }
}
