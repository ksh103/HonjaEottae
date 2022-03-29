package com.ssafy.tourist.domain.user.response;

import com.ssafy.tourist.domain.user.db.bean.AreaAnalysisDetail;
import com.ssafy.tourist.global.model.response.BaseResponseBody;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@ApiModel(value = "AnalysisAreaRes", description = "방문한 지역 분석")
public class AreaAnalysisRes extends BaseResponseBody {
    @ApiModelProperty(value = "방문한 지역 분석")
    List<AreaAnalysisDetail> list = null;

    public static AreaAnalysisRes of (Integer statuscode, String message, List<AreaAnalysisDetail> list){
        AreaAnalysisRes res = new AreaAnalysisRes();
        res.setStatusCode(statuscode);
        res.setMessage(message);
        res.setList(list);

        return res;
    }
}
