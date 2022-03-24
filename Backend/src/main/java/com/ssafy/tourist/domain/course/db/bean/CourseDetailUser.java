package com.ssafy.tourist.domain.course.db.bean;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CourseDetailUser {
    private String courseName;
    private String courseContent;
    private String touristName;
    private String touristAddress;
    private double touristLat;
    private double touristLng;
}
