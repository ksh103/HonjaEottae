package com.ssafy.tourist.domain.course.db.bean;

import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;

import javax.persistence.Column;

@Data
@AllArgsConstructor
public class CourseDetail {
    private String courseName;
    private String courseContent;
    private String courseDistance;
    private String courseDays;
    private int courseHits;
}
