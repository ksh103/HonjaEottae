package com.ssafy.tourist.domain.record.response;

import com.ssafy.tourist.global.model.response.BaseResponseBody;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@ApiModel(value = "TourIsStartGetRes", description = "여행 시작 여부 응답")
public class TourIsStartGetRes extends BaseResponseBody {
    @ApiModelProperty(value = "여행 시작 여부 정보")
    boolean isStart = false;

    public static TourIsStartGetRes of (Integer statusCode, String message, boolean isStart) {
        TourIsStartGetRes res = new TourIsStartGetRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setStart(isStart);

        return res;
    }

}
