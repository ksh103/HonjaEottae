package com.ssafy.tourist.domain.record.service;

import com.ssafy.tourist.domain.course.db.entity.CourseData;
import com.ssafy.tourist.domain.record.request.TagRegisterPostReq;
import com.ssafy.tourist.domain.record.request.TourEndPostReq;
import com.ssafy.tourist.domain.record.request.TouristVisitPostReq;

import java.util.List;

public interface TourService {
    int courseStartByUser(int userId, int courseId);
    int courseEndByUser(TourEndPostReq tourEndPostReq);
    int touristVisitByUser(TouristVisitPostReq touristVisitPostReq);
    List<CourseData> touristNameVisitByUser(int userId, int courseId);
    int tagRegisterByUser(TagRegisterPostReq tagRegisterPostReq);
}
