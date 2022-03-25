package com.ssafy.tourist.domain.course.service;

import com.ssafy.tourist.domain.course.db.bean.CourseDetail;
import com.ssafy.tourist.domain.course.db.bean.CourseTagDetail;
import com.ssafy.tourist.domain.course.db.bean.CourseTourTestResultDetail;
import com.ssafy.tourist.domain.course.db.bean.CourseTouristDetail;
import com.ssafy.tourist.domain.course.db.repository.BookmarkRepository;
import com.ssafy.tourist.domain.course.db.repository.CourseDetailRepositorySpp;
import com.ssafy.tourist.domain.course.db.repository.CourseRepository;
import com.ssafy.tourist.domain.record.db.entity.Record;
import com.ssafy.tourist.domain.record.db.repository.TourRepository;
import com.ssafy.tourist.domain.record.db.repository.TourStampRepository;
import com.ssafy.tourist.domain.tourtest.db.repository.TourTestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class CourseDetailServiceImpl implements CourseDetailService {

    @Autowired
    CourseRepository courseRepository;

    @Autowired
    TourTestRepository tourTestRepository;

    @Autowired
    TourRepository tourRepository;

    @Autowired
    TourStampRepository tourStampRepository;

    @Autowired
    BookmarkRepository bookmarkRepository;

    @Autowired
    CourseDetailRepositorySpp courseDetailRepositorySpp;


    @Override
    public List<CourseDetail> courseDetail(int courseId) { return courseDetailRepositorySpp.courseDetailByCourseId(courseId);}


    @Override
    public List<CourseTouristDetail> courseDataDetail(int courseId) {return courseDetailRepositorySpp.courseDataDetailByCourseId(courseId);}


    @Override
    public List<Record> courseRecordDetail(int courseId) { return courseDetailRepositorySpp.courseRecordDetailByCourseId(courseId); }


    @Override
    public List<CourseTourTestResultDetail> courseTourTestResultDetail(int courseId) { return courseDetailRepositorySpp.courseTourTestResultDetailByCourseId(courseId); }


    @Override
    public List<CourseTagDetail> courseTagDetail(int courseId) { return courseDetailRepositorySpp.courseTagDetailByCourseId(courseId); }


    @Override
    public double courseConnection(int courseId) {

        int allTourIsStart = tourRepository.countTour(); // 코스 시작 전체 개수
        int tourIsStart = tourRepository.countToursByCourseId(courseId); // 특정 코스 시작 전체 개수

        int allStamp = tourStampRepository.countTourStamp(courseId); // 코스 방문 시작한 관광지 개수
        int stampIsRegister = tourStampRepository.countTourStampByCourseId(courseId); // 방문한 관광지 개수

        int allBookmark = bookmarkRepository.countBookmarks(); // 전체 북마크 개수
        int bookmarkIsRegister = bookmarkRepository.countBookmarksByCourseId(courseId); // 특정 코스 북마크 개수

        double connectionPer  =  (((double) tourIsStart / (double) allTourIsStart) * 60) + (((double) stampIsRegister / (double) allStamp) * 35) +
                (((double) bookmarkIsRegister / (double) allBookmark) * 15);

        return connectionPer;
    }
}
