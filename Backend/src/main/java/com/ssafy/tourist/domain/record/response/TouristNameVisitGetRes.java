package com.ssafy.tourist.domain.record.response;

import com.ssafy.tourist.domain.course.db.entity.CourseData;
import com.ssafy.tourist.global.model.response.BaseResponseBody;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@ApiModel(value = "TouristNameVisitGetRes", description = "방문한 관광지 명 응답")
public class TouristNameVisitGetRes extends BaseResponseBody {
    @ApiModelProperty(value = "방문한 관광지 명 정보")
    List<CourseData> list = null;

    public static TouristNameVisitGetRes of (Integer statusCode, String message, List<CourseData> list) {
        TouristNameVisitGetRes res = new TouristNameVisitGetRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setList(list);

        return res;
    }

}
