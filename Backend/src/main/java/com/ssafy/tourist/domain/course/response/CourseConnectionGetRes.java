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
@ApiModel(value = "CourseConnectionGetRes", description = "새로운 인연 만날 확률(%) 응답")
public class CourseConnectionGetRes extends BaseResponseBody {
    @ApiModelProperty(value = "새로운 인연 만날 확률(%) 정보")
    double percentage = 0;

    public static CourseConnectionGetRes of (Integer statusCode, String message, double percentage) {
        CourseConnectionGetRes res = new CourseConnectionGetRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setPercentage(percentage);

        return res;
    }

}
