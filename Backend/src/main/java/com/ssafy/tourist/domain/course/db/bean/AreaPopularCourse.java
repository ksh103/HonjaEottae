package com.ssafy.tourist.domain.course.db.bean;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;

@Getter
@Data
@AllArgsConstructor
public class AreaPopularCourse {
    private int courseId;
    private String courseName;

    @JsonIgnore
    private long countA;
}
