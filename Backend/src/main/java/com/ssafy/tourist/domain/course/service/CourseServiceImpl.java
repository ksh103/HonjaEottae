package com.ssafy.tourist.domain.course.service;

import com.ssafy.tourist.domain.course.db.entity.Course;
import com.ssafy.tourist.domain.course.db.repository.CourseRepository;
import com.ssafy.tourist.domain.course.db.repository.CourseRepositorySpp;
import com.ssafy.tourist.domain.course.request.CourseHitsPostReq;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class CourseServiceImpl implements CourseService{

    @Autowired
    CourseRepository courseRepository;

    @Autowired
    CourseRepositorySpp courseRepositorySpp;

    private static final int SUCCESS = 1;
    private static final int FAIL = -1;

    @Override
    public int courseHits(CourseHitsPostReq courseHitsPostReq) {
        if(courseRepository.findById(courseHitsPostReq.getCourseId()).isPresent()) {
            int courseId = courseRepository.findById(courseHitsPostReq.getCourseId()).get().getCourseId();

            courseRepository.courseHitsByCourseId(courseId);

            return SUCCESS;
        }else return FAIL;
    }

    @Override
    public Page<Course> popularCourse(Pageable pageable) {
        return courseRepositorySpp.findPopularCourse(pageable);
    }

    @Override
    public Page<Course> courseSearch(String courseName, Pageable pageable) {
        return courseRepositorySpp.findCourseSearch(courseName, pageable);
    }
}
