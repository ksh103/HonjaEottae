package com.ssafy.tourist.domain.course.response;

import com.ssafy.tourist.domain.course.db.entity.AreaCount;
import com.ssafy.tourist.global.model.response.BaseResponseBody;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@ApiModel(value = "areaCountRes", description = "지역별 카운트 응답")
public class AreaCountRes extends BaseResponseBody {
    @ApiModelProperty(value = "지역별 관광지 개수 정보")
    List<AreaCount> areaCounts = new ArrayList<>();

    public static AreaCountRes of (Integer statusCode, String message,List<AreaCount> list){
        AreaCountRes res = new AreaCountRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setAreaCounts(list);
        return res;
    }
}
