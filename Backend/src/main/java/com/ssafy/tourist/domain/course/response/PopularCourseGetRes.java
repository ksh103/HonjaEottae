package com.ssafy.tourist.domain.course.response;

import com.ssafy.tourist.domain.course.db.bean.PopularCourse;
import com.ssafy.tourist.domain.course.db.entity.Course;
import com.ssafy.tourist.global.model.response.BaseResponseBody;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.domain.Page;

import java.util.List;

@Getter
@Setter
@ApiModel(value = "PopularCourseGetRes", description = "인기 코스 응답")
public class PopularCourseGetRes extends BaseResponseBody {
    @ApiModelProperty(value = "인기 코스 정보")
    Page<PopularCourse> list = null;

    public static PopularCourseGetRes of (Integer statusCode, String message, Page<PopularCourse> list) {
        PopularCourseGetRes res = new PopularCourseGetRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setList(list);

        return res;
    }

}
