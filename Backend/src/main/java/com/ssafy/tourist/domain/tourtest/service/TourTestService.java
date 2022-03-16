package com.ssafy.tourist.domain.tourtest.service;


import com.ssafy.tourist.domain.user.db.entity.User;

public interface TourTestService {

    int tourTestResultByUser(int userId, int tourTestId);

}
