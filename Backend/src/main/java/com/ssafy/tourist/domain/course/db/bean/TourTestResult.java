package com.ssafy.tourist.domain.course.db.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
public class TourTestResult {
    private int tourTestId;
    private String tourTestName;
    private Long tourTestCount;
}
