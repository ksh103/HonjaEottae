package com.ssafy.tourist.domain.record.response;

import com.ssafy.tourist.domain.record.db.entity.TagCode;
import com.ssafy.tourist.global.model.response.BaseResponseBody;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@ApiModel(value = "RecordRegisterPostRes", description = "여행 레코드(일기) 응답")
public class RecordRegisterPostRes extends BaseResponseBody {
    @ApiModelProperty(value = "여행 레코드(일기) 정보")
    int recordId = 0;

    public static RecordRegisterPostRes of (Integer statusCode, String message, int recordId) {
        RecordRegisterPostRes res = new RecordRegisterPostRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setRecordId(recordId);

        return res;
    }

}
