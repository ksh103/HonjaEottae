package com.ssafy.tourist.domain.user.response;

import com.ssafy.tourist.domain.user.db.bean.CourseNameVisitDetail;
import com.ssafy.tourist.global.model.response.BaseResponseBody;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@ApiModel(value = "VisitCourseNameRes", description = "사용자 방문한 코스")
public class CourseNameVisitDetailRes extends BaseResponseBody {
    @ApiModelProperty(value = "사용자 방문 코스")
    List<CourseNameVisitDetail> list = null;

    public static CourseNameVisitDetailRes of (Integer statuscode, String message, List<CourseNameVisitDetail> list){
        CourseNameVisitDetailRes res = new CourseNameVisitDetailRes();
        res.setStatusCode(statuscode);
        res.setMessage(message);
        res.setList(list);

        return res;
    }
}
