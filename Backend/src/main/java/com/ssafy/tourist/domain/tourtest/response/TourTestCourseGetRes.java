package com.ssafy.tourist.domain.tourtest.response;

import com.ssafy.tourist.domain.course.db.entity.Course;
import com.ssafy.tourist.global.model.response.BaseResponseBody;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@ApiModel(value = "TourTestCourseGetRes", description = "여행 취향 테스트 결과 코스 응답")
public class TourTestCourseGetRes extends BaseResponseBody {
    @ApiModelProperty(value = "여행 취향 테스트 결과 코스 정보")
    List<Course> list = null;

    public static TourTestCourseGetRes of (Integer statusCode, String message, List<Course> list) {
        TourTestCourseGetRes res = new TourTestCourseGetRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setList(list);

        return res;
    }

}
