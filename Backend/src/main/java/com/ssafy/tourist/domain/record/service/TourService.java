package com.ssafy.tourist.domain.record.service;

import com.ssafy.tourist.domain.record.db.entity.Tour;
import com.ssafy.tourist.domain.record.db.entity.TourID;

public interface TourService {
    Tour tourStartByUser(int userId, int courseId);
    int tourEndByUser(int userId, int courseId);
}
