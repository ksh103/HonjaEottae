package com.ssafy.tourist.domain.course.response;

import com.ssafy.tourist.domain.course.db.entity.Course;
import com.ssafy.tourist.domain.course.db.entity.Tourist;
import com.ssafy.tourist.global.model.response.BaseResponseBody;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.domain.Page;

@Getter
@Setter
@ApiModel(value = "TouristSearchGetRes", description = "관광지 검색 응답")
public class TouristSearchGetRes extends BaseResponseBody {
    @ApiModelProperty(value = "관광지 검색 정보")
    Page<Tourist> list = null;

    public static TouristSearchGetRes of (Integer statusCode, String message, Page<Tourist> list) {
        TouristSearchGetRes res = new TouristSearchGetRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setList(list);

        return res;
    }

}
