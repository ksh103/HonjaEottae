package com.ssafy.tourist.domain.course.response;

import com.querydsl.core.Tuple;
import com.ssafy.tourist.domain.course.db.bean.CourseDetail;
import com.ssafy.tourist.domain.course.db.bean.CourseDetailUser;
import com.ssafy.tourist.domain.course.db.entity.Course;
import com.ssafy.tourist.domain.course.db.entity.CourseData;
import com.ssafy.tourist.global.model.response.BaseResponseBody;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.domain.Page;

import java.util.List;

@Getter
@Setter
@ApiModel(value = "CourseDetailGetRes", description = "코스 상세보기 응답")
public class CourseDetailGetRes extends BaseResponseBody {
    @ApiModelProperty(value = "코스 상세보기 정보")
    List<CourseDetail> courseDetailList = null;

    public static CourseDetailGetRes of (Integer statusCode, String message, List<CourseDetail> courseDetailList) {
        CourseDetailGetRes res = new CourseDetailGetRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setCourseDetailList(courseDetailList);

        return res;
    }

}
