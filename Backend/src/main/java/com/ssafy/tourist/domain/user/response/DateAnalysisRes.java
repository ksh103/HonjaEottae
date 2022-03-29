package com.ssafy.tourist.domain.user.response;

import com.ssafy.tourist.domain.user.db.bean.DateAnalysisDetail;
import com.ssafy.tourist.global.model.response.BaseResponseBody;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@ApiModel(value = "DateAnalysisRes", description = "방문한 월별 분석")
public class DateAnalysisRes extends BaseResponseBody {
    @ApiModelProperty(value = "방문한 월별 분석")
    List<DateAnalysisDetail> list = null;

    public static DateAnalysisRes of (Integer statuscode, String message, List<DateAnalysisDetail> list){
        DateAnalysisRes res = new DateAnalysisRes();
        res.setStatusCode(statuscode);
        res.setMessage(message);
        res.setList(list);

        return res;
    }
}
