package com.ssafy.tourist.domain.course.response;

import com.ssafy.tourist.domain.course.db.entity.Course;
import com.ssafy.tourist.global.model.response.BaseResponseBody;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.domain.Page;

@Getter
@Setter
@ApiModel(value = "CourseListGetRes", description = "사용자 생성 코스 조회 응답")
public class CourseListGetRes extends BaseResponseBody {
    @ApiModelProperty(value = "사용자 생성 코스 정보")
    Page<Course> list = null;

    public static CourseListGetRes of (Integer statusCode, String message, Page<Course> list) {
        CourseListGetRes res = new CourseListGetRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setList(list);

        return res;
    }

}
