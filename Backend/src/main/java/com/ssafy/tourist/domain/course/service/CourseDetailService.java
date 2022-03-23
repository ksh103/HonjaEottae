package com.ssafy.tourist.domain.course.service;

import com.querydsl.core.Tuple;
import com.ssafy.tourist.domain.course.db.entity.Course;
import com.ssafy.tourist.domain.course.db.entity.CourseData;
import com.ssafy.tourist.domain.record.db.entity.Record;

import java.util.List;

public interface CourseDetailService {
    List<CourseData> courseDataDetail(int courseId);
    boolean courseIsRegister(int courseId);

    List<Record> courseRecordDetail(int courseId);
}
