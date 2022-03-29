package com.ssafy.tourist.domain.tourtest.service;

import com.ssafy.tourist.domain.course.db.bean.CourseInfo;
import com.ssafy.tourist.domain.course.db.repository.CourseRepository;
import com.ssafy.tourist.domain.tourtest.db.repository.TourTestRepository;
import com.ssafy.tourist.domain.tourtest.db.repository.TourTestRepositorySpp;
import com.ssafy.tourist.domain.user.db.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TourTestServiceImpl implements TourTestService {

    @Autowired
    TourTestRepository tourTestRepository;

    @Autowired
    CourseRepository courseRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    TourTestRepositorySpp tourTestRepositorySpp;


    private static final int SUCCESS = 1;
    private static final int NONE = 2;
    private static final int FAIL = -1;


    @Override
    public int tourTestResultByUser(int userId, int tourTestId) {

        if(userRepository.findById(userId).isPresent()) {
            int tourTest = userRepository.findById(userId).get().getTourTestId();

            // ******** 기존 결과 합계 - 1 ******** //
            tourTestRepository.tourTestBeforeCountByUser(tourTest);

            // ******** 테스트 결과 등록 ******** //
            userRepository.tourTestResultByUserId(userId, tourTestId);
            tourTestRepository.tourTestResultCountByUser(tourTestId);

            return SUCCESS;
        }else {
            tourTestRepository.tourTestResultCountByUser(tourTestId);
            return NONE;
        }
    }

    @Override
    public List<CourseInfo> tourTestCourseByUser(int courseId) { return tourTestRepositorySpp.findTourTestCourseByUser(courseId); }

    @Override
    public List<Integer> tourTestResult() {
        return tourTestRepositorySpp.findTourTestResult();
    }
}
