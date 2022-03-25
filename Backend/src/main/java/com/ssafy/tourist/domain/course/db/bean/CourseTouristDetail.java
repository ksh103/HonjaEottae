package com.ssafy.tourist.domain.course.db.bean;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CourseTouristDetail {
    private String touristName;
    private String touristAddress;
    private double touristLat;
    private double touristLng;
}
