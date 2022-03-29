package com.ssafy.tourist.domain.user.response;

import com.ssafy.tourist.domain.user.db.bean.VisitCourseName;
import com.ssafy.tourist.global.model.response.BaseResponseBody;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@ApiModel(value = "VisitCourseNameRes", description = "사용자 방문한 코스")
public class VisitCourseNameRes extends BaseResponseBody {
    @ApiModelProperty(value = "사용자 방문 코스")
    List<VisitCourseName> list = null;

    public static VisitCourseNameRes of (Integer statuscode, String message, List<VisitCourseName> list){
        VisitCourseNameRes res = new VisitCourseNameRes();
        res.setStatusCode(statuscode);
        res.setMessage(message);
        res.setList(list);

        return res;
    }
}
