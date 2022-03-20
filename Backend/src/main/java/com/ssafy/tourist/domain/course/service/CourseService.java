package com.ssafy.tourist.domain.course.service;

import com.ssafy.tourist.domain.course.db.entity.Course;
import com.ssafy.tourist.domain.course.request.CourseHitsPostReq;
import com.ssafy.tourist.domain.course.request.CourseRegisterPostReq;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface CourseService {
    int courseHits(CourseHitsPostReq courseHitsPostReq); // 코스 조회 수
    int courseRegisterByUser(CourseRegisterPostReq courseRegisterPostReq); // 사용자 코스 등록
    Page<Course> courseListByUser(int userId, Pageable pageable);
    Page<Course> popularCourse(Pageable pageable); // 인기 코스
    Page<Course> courseSearch(String courseName, Pageable pageable); // 코스 검색
}
