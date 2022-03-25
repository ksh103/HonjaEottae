package com.ssafy.tourist.domain.course.service;

import com.ssafy.tourist.domain.course.db.bean.CourseDetail;
import com.ssafy.tourist.domain.course.db.bean.CourseTagDetail;
import com.ssafy.tourist.domain.course.db.bean.CourseTourTestResultDetail;
import com.ssafy.tourist.domain.course.db.bean.CourseTouristDetail;
import com.ssafy.tourist.domain.record.db.entity.Record;

import java.util.List;

public interface CourseDetailService {
    List<CourseDetail> courseDetail(int courseId);
    List<CourseTouristDetail> courseDataDetail(int courseId);
    List<Record> courseRecordDetail(int courseId);
    List<CourseTourTestResultDetail> courseTourTestResultDetail(int courseId);
    List<CourseTagDetail> courseTagDetail(int courseId);
}
