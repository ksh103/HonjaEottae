package com.ssafy.tourist.domain.tourtest.response;

import com.ssafy.tourist.global.model.response.BaseResponseBody;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@ApiModel(value = "TourTestResultGetRes", description = "여행 취향 테스트 결과 합계 응답")
public class TourTestResultGetRes extends BaseResponseBody {
    @ApiModelProperty(value = "여행 취향 테스트 결과 합계 정보")
    List<Integer> list = null;

    public static TourTestResultGetRes of (Integer statusCode, String message, List<Integer> list) {
        TourTestResultGetRes res = new TourTestResultGetRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setList(list);

        return res;
    }

}
