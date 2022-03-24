package com.ssafy.tourist.domain.course.service;

import com.ssafy.tourist.domain.course.db.bean.CourseDetailUser;
import com.ssafy.tourist.domain.course.db.bean.CourseTagDetail;
import com.ssafy.tourist.domain.course.db.bean.CourseTourTestResultDetail;
import com.ssafy.tourist.domain.course.db.entity.CourseData;
import com.ssafy.tourist.domain.course.db.repository.CourseDetailRepositorySpp;
import com.ssafy.tourist.domain.course.db.repository.CourseRepository;
import com.ssafy.tourist.domain.record.db.entity.Record;
import com.ssafy.tourist.domain.tourtest.db.repository.TourTestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class CourseDetailServiceImpl implements CourseDetailService {

    @Autowired
    CourseRepository courseRepository;

    @Autowired
    TourTestRepository tourTestRepository;

    @Autowired
    CourseDetailRepositorySpp courseDetailRepositorySpp;


    @Override
    public List<CourseData> courseDataDetail(int courseId) { return courseDetailRepositorySpp.courseDataDetailByCourseId(courseId); }

    @Override
    public List<Record> courseRecordDetail(int courseId) { return courseDetailRepositorySpp.courseRecordDetailByCourseId(courseId); }

    @Override
    public List<CourseTourTestResultDetail> courseTourTestResultDetail(int courseId) { return courseDetailRepositorySpp.courseTourTestResultDetailByCourseId(courseId); }

    @Override
    public List<CourseTagDetail> courseTagDetail(int courseId) { return courseDetailRepositorySpp.courseTagDetailByCourseId(courseId); }
}
