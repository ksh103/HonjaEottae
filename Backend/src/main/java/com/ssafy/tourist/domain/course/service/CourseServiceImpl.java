package com.ssafy.tourist.domain.course.service;

import com.ssafy.tourist.domain.course.db.bean.AreaPopularCourse;
import com.ssafy.tourist.domain.course.db.bean.CourseInfo;
import com.ssafy.tourist.domain.course.db.entity.Course;
import com.ssafy.tourist.domain.course.db.entity.CourseData;
import com.ssafy.tourist.domain.course.db.repository.CourseDataRepository;
import com.ssafy.tourist.domain.course.db.repository.CourseRepository;
import com.ssafy.tourist.domain.course.db.repository.CourseRepositorySpp;
import com.ssafy.tourist.domain.course.request.CourseHitsPostReq;
import com.ssafy.tourist.domain.course.request.CourseRegisterPostReq;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseServiceImpl implements CourseService{

    @Autowired
    CourseRepository courseRepository;

    @Autowired
    CourseDataRepository courseDataRepository;

    @Autowired
    CourseRepositorySpp courseRepositorySpp;

    private static final int SUCCESS = 1;
    private static final int FAIL = -1;

    @Override
    public int courseHits(CourseHitsPostReq courseHitsPostReq) {
        if(courseRepository.findById(courseHitsPostReq.getCourseId()).isPresent()) {
            int courseId = courseRepository.findById(courseHitsPostReq.getCourseId()).get().getCourseId();

            courseRepository.courseHitsByCourseId(courseId);

            return SUCCESS;
        }else return FAIL;
    }

    @Override
    public int courseRegisterByUser(CourseRegisterPostReq courseRegisterPostReq) {
        Course course = new Course();

        // 코스 등록
        course.setUserId(courseRegisterPostReq.getUserId());
        course.setCourseName(courseRegisterPostReq.getCourseName());
        course.setCourseContent(courseRegisterPostReq.getCourseContent());
        course.setCourseDistance(courseRegisterPostReq.getCourseDistance());
        course.setCourseDays(courseRegisterPostReq.getCourseDays());
        course.setRegister(true);

        courseRepository.save(course);
        
        // 코스 관광지 등록
        CourseData courseData = new CourseData();

        int courseId = course.getCourseId();
        int size = courseRegisterPostReq.getTouristId().length;

        int[] touristId = courseRegisterPostReq.getTouristId();


        for (int i = 0; i < size; i++) {
            courseData.setCourseId(courseId);
            courseData.setCourseDataId(i + 1);

            courseData.setTouristId(touristId[i]);

            courseDataRepository.save(courseData);
        }
        return SUCCESS;
    }

    @Override
    public Page<CourseInfo> courseListByUser(int userId, Pageable pageable) { return courseRepositorySpp.findCourseListByUser(userId, pageable); }

    @Override
    public Page<CourseInfo> popularCourse(Pageable pageable) {return courseRepositorySpp.findPopularCourse(pageable);}

    @Override
    public Page<CourseInfo> courseSearch(String courseName, Pageable pageable) { return courseRepositorySpp.findCourseSearch(courseName, pageable); }

    @Override
    public List<AreaPopularCourse> areaPopularCourseFind(String areaName) {
        String newAreaName = "";
        if(areaName.equals("서울"))             newAreaName = "서울특별";
        else if(areaName.equals("경기"))        newAreaName = "경기도 ";
        else if(areaName.equals("강원"))        newAreaName = "강원도 ";
        else if(areaName.equals("인천"))        newAreaName = "인천광역";
        else if(areaName.equals("세종"))        newAreaName = "세종특별";
        else if(areaName.equals("충북"))        newAreaName = "충청북도";
        else if(areaName.equals("충남"))        newAreaName = "충청남도";
        else if(areaName.equals("대전"))        newAreaName = "대전광역";
        else if(areaName.equals("경북"))        newAreaName = "경상북도";
        else if(areaName.equals("전북"))        newAreaName = "전라북도";
        else if(areaName.equals("대구"))        newAreaName = "대구광역";
        else if(areaName.equals("울산"))        newAreaName = "울산광역";
        else if(areaName.equals("광주"))        newAreaName = "광주광역";
        else if(areaName.equals("경남"))        newAreaName = "경상남도";
        else if(areaName.equals("부산"))        newAreaName = "부산광역";
        else if(areaName.equals("전남"))        newAreaName = "전라남도";
        else if(areaName.equals("제주"))        newAreaName = "제주특별";


        return courseRepositorySpp.findPopularCourse(newAreaName);
    }
}
