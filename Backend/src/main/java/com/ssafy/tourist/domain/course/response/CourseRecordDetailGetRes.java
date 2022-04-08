package com.ssafy.tourist.domain.course.response;

import com.ssafy.tourist.domain.course.db.bean.CourseRecordDetail;
import com.ssafy.tourist.domain.record.db.entity.Record;
import com.ssafy.tourist.global.model.response.BaseResponseBody;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@ApiModel(value = "CourseRecordDetailGetRes", description = "코스 여행 레코드(일기) 조회 응답")
public class CourseRecordDetailGetRes extends BaseResponseBody {
    @ApiModelProperty(value = "코스 여행 레코드(일기) 조회정보")
    List<CourseRecordDetail> list = null;

    public static CourseRecordDetailGetRes of (Integer statusCode, String message, List<CourseRecordDetail> list) {
        CourseRecordDetailGetRes res = new CourseRecordDetailGetRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setList(list);

        return res;
    }

}
