package com.ssafy.tourist.domain.course.service;


import com.ssafy.tourist.domain.course.db.bean.CourseDetail;
import com.ssafy.tourist.domain.course.db.bean.CourseDetailUser;
import com.ssafy.tourist.domain.course.db.bean.CourseTourTestResultDetail;
import com.ssafy.tourist.domain.record.db.entity.Record;

import java.util.List;

public interface CourseDetailService {
    List<CourseDetailUser> courseDataUserDetail(int courseId);
    List<CourseDetail> courseDataDetail(int courseId);

    boolean courseIsRegister(int courseId);

    List<Record> courseRecordDetail(int courseId);

    List<CourseTourTestResultDetail> courseTourTestResultDetail(int courseId);
}
