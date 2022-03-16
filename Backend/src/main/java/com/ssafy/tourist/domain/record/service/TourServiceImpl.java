package com.ssafy.tourist.domain.record.service;

import com.ssafy.tourist.domain.record.db.entity.Tour;
import com.ssafy.tourist.domain.record.db.entity.TourID;
import com.ssafy.tourist.domain.record.db.repository.TourRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Service
public class TourServiceImpl implements TourService {

    @Autowired
    TourRepository tourRepository;

    private static final int SUCCESS = 1;
    private static final int FAIL = -1;

    @Override
    public Tour tourStartByUser(int userId, int courseId) {
        Tour tour = new Tour();

        tour.setUserId(userId);
        tour.setCourseId(courseId);
        tour.setTourStart(LocalDateTime.now());

        return tourRepository.save(tour);
    }

    @Override
    public int tourEndByUser(int userId, int courseId) {
        TourID tourID = new TourID();
        tourID.setUserId(userId);
        tourID.setCourseId(courseId);

        if(tourRepository.findById(tourID).isPresent()) {
            return tourRepository.tourEndByUser(userId, courseId);
        } else return FAIL;
    }
}
