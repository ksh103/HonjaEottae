package com.ssafy.tourist.domain.record.service;

import com.ssafy.tourist.domain.course.db.entity.CourseData;
import com.ssafy.tourist.domain.record.db.bean.TourTagList;
import com.ssafy.tourist.domain.record.db.bean.VisitTouristName;
import com.ssafy.tourist.domain.record.db.entity.Tag;
import com.ssafy.tourist.domain.record.db.entity.TagCode;
import com.ssafy.tourist.domain.record.request.TagRegisterPostReq;
import com.ssafy.tourist.domain.record.request.TourEndPostReq;
import com.ssafy.tourist.domain.record.request.TourStartPostReq;
import com.ssafy.tourist.domain.record.request.TouristVisitPostReq;

import java.util.List;

public interface TourService {
    int courseStartByUser(TourStartPostReq tourStartPostReq);
    int courseEndByUser(TourEndPostReq tourEndPostReq);
    boolean courseIsStartByUser(int userId, int courseId);

    int touristVisitByUser(TouristVisitPostReq touristVisitPostReq);

    List<VisitTouristName> touristNameVisitByUser(int userId, int courseId);

    int tagRegisterByUser(TagRegisterPostReq tagRegisterPostReq);
    List<TagCode> tagList();
}
