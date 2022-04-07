package com.ssafy.tourist.domain.course.service;

import com.ssafy.tourist.domain.course.db.bean.*;
import com.ssafy.tourist.domain.record.db.entity.Record;

import java.util.List;

public interface CourseDetailService {
    List<CourseDetail> courseDetail(int courseId);
    List<CourseTouristDetail> courseDataDetail(int courseId);
    List<CourseRecordDetail> courseRecordDetail(int courseId);
    List<CourseTourTestResultDetail> courseTourTestResultDetail(int courseId);
    List<CourseTagDetail> courseTagDetail(int courseId);

    double courseConnection(int courseId);

    int courseTourCount(int courseId);
}
