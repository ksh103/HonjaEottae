package com.ssafy.tourist.domain.tourtest.db.bean;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class TourTestCourse {
    private int courseId;
    private String courseName;

    private int touristId;
    private int fileId;
}
