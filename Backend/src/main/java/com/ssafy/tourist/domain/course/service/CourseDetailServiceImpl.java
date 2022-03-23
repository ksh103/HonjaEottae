package com.ssafy.tourist.domain.course.service;

import com.querydsl.core.Tuple;
import com.ssafy.tourist.domain.course.db.entity.Course;
import com.ssafy.tourist.domain.course.db.entity.CourseData;
import com.ssafy.tourist.domain.course.db.repository.CourseDetailRepositorySpp;
import com.ssafy.tourist.domain.course.db.repository.CourseRepository;
import com.ssafy.tourist.domain.course.db.repository.CourseRepositorySpp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseDetailServiceImpl implements CourseDetailService {

    @Autowired
    CourseRepository courseRepository;

    @Autowired
    CourseDetailRepositorySpp courseDetailRepositorySpp;


    @Override
    public List<CourseData> courseDataDetail(int courseId) { return courseDetailRepositorySpp.courseDataDetailByCourseId(courseId); }

    @Override
    public boolean courseIsRegister(int courseId) {return courseRepository.findCourseIsRegisterByCourseId(courseId);}
}
