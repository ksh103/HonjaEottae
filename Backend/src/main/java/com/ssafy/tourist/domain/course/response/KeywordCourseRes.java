package com.ssafy.tourist.domain.course.response;

import com.ssafy.tourist.domain.course.db.bean.KeywordCourse;
import com.ssafy.tourist.global.model.response.BaseResponseBody;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@ApiModel(value = "keywordCourse", description = "키워드별 코스 추천 응답")
public class KeywordCourseRes extends BaseResponseBody {
    @ApiModelProperty(value = "키워드별 코스1 이름")
    String list1Name = "";

    @ApiModelProperty(value = "키워드별 코스1 정보")
    List<KeywordCourse> list1 = new ArrayList<>();

    @ApiModelProperty(value = "키워드별 코스2 이름")
    String list2Name = "";

    @ApiModelProperty(value = "키워드별 코스2 정보")
    List<KeywordCourse> list2 = new ArrayList<>();

    @ApiModelProperty(value = "키워드별 코스3 이름")
    String list3Name = "";

    @ApiModelProperty(value = "키워드별 코스3 정보")
    List<KeywordCourse> list3 = new ArrayList<>();



    public static KeywordCourseRes of (String list1Name, List<KeywordCourse> list1,
                                       String list2Name, List<KeywordCourse> list2,
                                       String list3Name, List<KeywordCourse> list3,
                                       String message,Integer statusCode){

        KeywordCourseRes res = new KeywordCourseRes();
        res.setStatusCode(statusCode);
        res.setMessage(message);
        res.setList1Name(list1Name);
        res.setList1(list1);
        res.setList2Name(list2Name);
        res.setList2(list2);
        res.setList3Name(list3Name);
        res.setList3(list3);

        return res;
    }
}
