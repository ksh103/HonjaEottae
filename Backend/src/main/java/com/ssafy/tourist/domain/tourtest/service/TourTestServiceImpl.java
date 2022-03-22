package com.ssafy.tourist.domain.tourtest.service;

import com.ssafy.tourist.domain.course.db.entity.Course;
import com.ssafy.tourist.domain.course.db.repository.CourseRepository;
import com.ssafy.tourist.domain.tourtest.db.repository.TourTestRepository;
import com.ssafy.tourist.domain.tourtest.db.repository.TourTestRepositorySpp;
import com.ssafy.tourist.domain.tourtest.request.TourTestResultPostReq;
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
    private static final int FAIL = -1;


    @Override
    public int tourTestResultByUser(TourTestResultPostReq tourTestResultPostReq) {
        // 회원이 존재하면
        if(userRepository.findById(tourTestResultPostReq.getUserId()).isPresent()) {
            return userRepository.tourTestResultByUserId(tourTestResultPostReq.getUserId(), tourTestResultPostReq.getTourTestId());
        }else return FAIL;
    }

    @Override
    public List<Course> tourTestCourseByUser(int courseId1, int courseId2) { return courseRepository.tourTestCourseByUser(courseId1, courseId2); }

    @Override
    public List<Integer> tourTestResult() {
        return tourTestRepositorySpp.findTourTestResult();
    }
}
