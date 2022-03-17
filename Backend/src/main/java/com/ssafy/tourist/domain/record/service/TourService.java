package com.ssafy.tourist.domain.record.service;

import com.ssafy.tourist.domain.record.request.TourEndPostReq;
import com.ssafy.tourist.domain.record.request.TouristVisitPostReq;

public interface TourService {
    int courseStartByUser(int userId, int courseId);
    int courseEndByUser(TourEndPostReq tourEndPostReq);
    int touristVisitByUser(TouristVisitPostReq touristVisitPostReq);
}
