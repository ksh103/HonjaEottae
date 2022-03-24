package com.ssafy.tourist.domain.course.response;

import com.ssafy.tourist.domain.course.db.bean.CourseTourTestResultDetail;
import com.ssafy.tourist.global.model.response.BaseResponseBody;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@ApiModel(value = "CourseTourTestResultDetailGetRes", description = "코스 성향 분석 응답")
public class CourseTourTestResultDetailGetRes extends BaseResponseBody {
    @ApiModelProperty(value = "코스 성향 분석 정보")
    List<CourseTourTestResultDetail> list = null;

    public static CourseTourTestResultDetailGetRes of (Integer statusCode, String message, List<CourseTourTestResultDetail> list) {
        CourseTourTestResultDetailGetRes res = new CourseTourTestResultDetailGetRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setList(list);

        return res;
    }

}
