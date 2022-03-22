package com.ssafy.tourist.domain.course.response;

import com.ssafy.tourist.domain.course.db.entity.Tourist;
import com.ssafy.tourist.global.model.response.BaseResponseBody;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.domain.Page;

import java.util.List;

@Getter
@Setter
@ApiModel(value = "TouristLocationGetRes", description = "위치에 따른 인근 관광지 응답")
public class TouristLocationGetRes extends BaseResponseBody {
    @ApiModelProperty(value = "위치에 따른 인근 관광지 정보")
    List<Tourist> list = null;

    public static TouristLocationGetRes of (Integer statusCode, String message, List<Tourist> list) {
        TouristLocationGetRes res = new TouristLocationGetRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setList(list);

        return res;
    }

}
