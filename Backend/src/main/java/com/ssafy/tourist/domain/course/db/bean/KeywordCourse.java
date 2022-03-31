package com.ssafy.tourist.domain.course.db.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

@Getter
@Data
@AllArgsConstructor
public class KeywordCourse {
    private String courseName;
    private int fileId;
    private int keywordId;
    private String keywordName;
    private int touristId;

}
