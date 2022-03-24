package com.ssafy.tourist.domain.course.service;

import com.ssafy.tourist.domain.course.db.entity.Course;
import com.ssafy.tourist.domain.course.db.entity.CourseData;
import com.ssafy.tourist.domain.course.db.entity.CourseDataID;
import com.ssafy.tourist.domain.course.db.repository.CourseDataRepository;
import com.ssafy.tourist.domain.course.db.repository.CourseRepository;
import com.ssafy.tourist.domain.course.db.repository.CourseRepositorySpp;
import com.ssafy.tourist.domain.course.request.CourseHitsPostReq;
import com.ssafy.tourist.domain.course.request.CourseRegisterPostReq;
import io.swagger.models.auth.In;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import springfox.documentation.schema.Entry;

import java.util.Collection;
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
        int size = courseRegisterPostReq.getTouristId().size();

        Collection<Integer> touristId = courseRegisterPostReq.getTouristId().values();
        Integer[] courseNum = touristId.toArray(new Integer[0]);

        for (int i = 0; i < size; i++) {
            courseData.setCourseId(courseId);
            courseData.setCourseDataId(i + 1);

            courseData.setTouristId(courseNum[i]);

            courseDataRepository.save(courseData);
        }
        return SUCCESS;
    }

    @Override
    public Page<Course> courseListByUser(int userId, Pageable pageable) { return courseRepositorySpp.findCourseListByUser(userId, pageable); }

    @Override
    public Page<Course> popularCourse(Pageable pageable) {
        return courseRepositorySpp.findPopularCourse(pageable);
    }

    @Override
    public Page<Course> courseSearch(String courseName, Pageable pageable) { return courseRepositorySpp.findCourseSearch(courseName, pageable); }
}
