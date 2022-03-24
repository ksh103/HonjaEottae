package com.ssafy.tourist.domain.course.response;

import com.ssafy.tourist.domain.course.db.bean.TourTestResult;
import com.ssafy.tourist.domain.course.db.entity.CourseData;
import com.ssafy.tourist.domain.tourtest.db.entity.TourTest;
import com.ssafy.tourist.global.model.response.BaseResponseBody;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@ApiModel(value = "CourseDetailGetRes", description = "새로운 인연 만날 확률(%) 응답")
public class CourseConnectionDetailGetRes extends BaseResponseBody {
    @ApiModelProperty(value = "새로운 인연 만날 확률(%) 정보")
    List<TourTestResult> list = null;

    public static CourseConnectionDetailGetRes of (Integer statusCode, String message, List<TourTestResult> list) {
        CourseConnectionDetailGetRes res = new CourseConnectionDetailGetRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setList(list);

        return res;
    }

}
