package com.ssafy.tourist.domain.course.db.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CourseDataID implements Serializable {
    @Column(name = "course_data_id")
    int courseDataId;

    @Column(name = "course_id")
    int courseId;
}
