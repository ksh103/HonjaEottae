package com.ssafy.tourist.domain.record.response;

import com.ssafy.tourist.domain.record.db.entity.Record;
import com.ssafy.tourist.global.model.response.BaseResponseBody;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@ApiModel(value = "RecordWriteListGetRes", description = "사용자가 작성한 여행 레코드 조회 응답")
public class RecordWriteListGetRes extends BaseResponseBody {
    @ApiModelProperty(value = "사용자가 작성한 여행 레코드 조회 정보")
    List<Record> list = null;

    public static RecordWriteListGetRes of (Integer statusCode, String message, List<Record> list) {
        RecordWriteListGetRes res = new RecordWriteListGetRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setList(list);

        return res;
    }

}
