package com.ssafy.tourist.domain.tourtest.service;

import com.ssafy.tourist.domain.tourtest.db.repository.TourTestRepository;
import com.ssafy.tourist.domain.user.db.entity.User;
import com.ssafy.tourist.domain.user.db.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class TourTestServiceImpl implements TourTestService {

    @Autowired
    TourTestRepository tourTestRepository;

    @Autowired
    UserRepository userRepository;

    private static final int SUCCESS = 1;
    private static final int FAIL = -1;


    @Override
    public int tourTestResultByUser(int userId, int tourTestId) {
        // 회원이 존재하면
        if(userRepository.findById(userId).isPresent()) {
            return userRepository.tourTestResultByUserId(userId, tourTestId);
        }else return FAIL;
    }
}
