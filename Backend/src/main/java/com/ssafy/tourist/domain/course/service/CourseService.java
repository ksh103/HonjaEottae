package com.ssafy.tourist.domain.course.service;

import com.ssafy.tourist.domain.course.db.entity.Course;
import com.ssafy.tourist.domain.course.request.CourseHitsPostReq;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface CourseService {
    int courseHits(CourseHitsPostReq courseHitsPostReq);
    Page<Course> popularCourse(Pageable pageable);
}
