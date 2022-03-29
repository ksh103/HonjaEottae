package com.ssafy.tourist.domain.course.db.bean;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CourseSearch {
    private int courseId;
    private String courseName;

    private int touristId;
    private int fileId;
}
