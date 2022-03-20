package com.ssafy.tourist.domain.record.response;

import com.querydsl.core.Tuple;
import com.ssafy.tourist.domain.course.db.entity.Course;
import com.ssafy.tourist.domain.record.db.entity.Tag;
import com.ssafy.tourist.global.model.response.BaseResponseBody;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.domain.Page;

import java.util.List;

@Getter
@Setter
@ApiModel(value = "TagListGetRes", description = "여행 코스 태그 응답")
public class TagListGetRes extends BaseResponseBody {
    @ApiModelProperty(value = "여행 코스 태그 정보")
    List<String> list = null;

    public static TagListGetRes of (Integer statusCode, String message, List<String> list) {
        TagListGetRes res = new TagListGetRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setList(list);

        return res;
    }

}
