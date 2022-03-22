package com.ssafy.tourist.domain.tourtest.service;


import com.ssafy.tourist.domain.course.db.entity.Course;
import com.ssafy.tourist.domain.tourtest.request.TourTestResultPostReq;

import java.util.List;

public interface TourTestService {

    int tourTestResultByUser(TourTestResultPostReq tourTestResultPostReq);
    List<Course> tourTestCourseByUser(int courseId1, int courseId2);
}
