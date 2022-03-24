package com.ssafy.tourist.domain.course.response;

import com.ssafy.tourist.domain.course.db.bean.CourseDetail;
import com.ssafy.tourist.domain.course.db.bean.CourseDetailUser;
import com.ssafy.tourist.global.model.response.BaseResponseBody;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@ApiModel(value = "CourseDetailUserGetRes", description = "코스 상세보기 응답")
public class CourseDetailUserGetRes extends BaseResponseBody {
    @ApiModelProperty(value = "코스 상세보기 정보")
    List<CourseDetailUser> courseDetailUserList = null;

    public static CourseDetailUserGetRes of (Integer statusCode, String message, List<CourseDetailUser> courseDetailUserList) {
        CourseDetailUserGetRes res = new CourseDetailUserGetRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setCourseDetailUserList(courseDetailUserList);

        return res;
    }

}
