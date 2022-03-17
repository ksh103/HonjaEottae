package com.ssafy.tourist.domain.course.service;

import com.ssafy.tourist.domain.course.request.CourseHitsPostReq;

public interface CourseService {
    int courseHits(CourseHitsPostReq courseHitsPostReq);
}
