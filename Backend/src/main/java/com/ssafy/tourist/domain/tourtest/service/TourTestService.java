package com.ssafy.tourist.domain.tourtest.service;


import com.ssafy.tourist.domain.course.db.bean.CourseInfo;

import java.util.List;

public interface TourTestService {

    int tourTestResultByUser(int userId, int tourTestId);
    List<CourseInfo> tourTestCourseByUser(int courseId);
    List<Integer> tourTestResult();
}
