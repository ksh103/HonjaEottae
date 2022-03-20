package com.ssafy.tourist.domain.course.db.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CourseDataID implements Serializable {
    int courseDataId;
    int courseId;
}
