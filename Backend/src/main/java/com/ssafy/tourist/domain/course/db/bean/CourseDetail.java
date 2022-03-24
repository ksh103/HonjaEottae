package com.ssafy.tourist.domain.course.db.bean;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CourseDetail {
    private String courseName;
    private String courseContent;
    private String courseDataName;
//    private String courseAddress;
//    private double courseLat;
//    private double courseLng;
}
