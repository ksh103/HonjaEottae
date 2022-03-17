package com.ssafy.tourist.domain.record.service;

public interface TourService {
    int courseStartByUser(int userId, int courseId);
    int courseEndByUser(int userId, int courseId);
    int touristVisitByUser(int userId, int courseId, int courseDataId);
}
