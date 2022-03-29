package com.ssafy.tourist.domain.tourtest.service;


import com.ssafy.tourist.domain.course.db.entity.Course;
import com.ssafy.tourist.domain.tourtest.db.bean.TourTestCourse;
import com.ssafy.tourist.domain.tourtest.request.TourTestResultPostReq;

import java.util.List;

public interface TourTestService {

    int tourTestResultByUser(int userId, int tourTestId);
    List<TourTestCourse> tourTestCourseByUser(int courseId);
    List<Integer> tourTestResult();
}
