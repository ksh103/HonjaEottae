package com.ssafy.tourist.domain.tourtest.db.repository;

import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.tourist.domain.course.db.bean.CourseInfo;
import com.ssafy.tourist.domain.course.db.entity.QCourse;
import com.ssafy.tourist.domain.course.db.entity.QCourseData;
import com.ssafy.tourist.domain.course.db.entity.QTouristImgPath;
import com.ssafy.tourist.domain.tourtest.db.entity.QTourTest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class TourTestRepositorySpp {

    @Autowired
    private JPAQueryFactory jpaQueryFactory;
    QTourTest qTourTest = QTourTest.tourTest;

    QCourse qCourse = QCourse.course;
    QCourseData qCourseData = QCourseData.courseData;
    QTouristImgPath qTouristImgPath = QTouristImgPath.touristImgPath;


    public List<Integer> findTourTestResult () {
        return jpaQueryFactory.select(qTourTest.tourTestResult).from(qTourTest)
                .groupBy(qTourTest.tourTestId)
                .where(qTourTest.tourTestId.lt(7))
                .fetchAll().fetch();
    }

    public List<CourseInfo> findTourTestCourseByUser(int courseId) {
        return jpaQueryFactory.select(Projections.constructor(CourseInfo.class, qCourse.courseId, qCourse.courseName,
                        qCourseData.touristId, qTouristImgPath.fileId.min().as("fileId"))).from(qCourse)
                .leftJoin(qCourseData).on(qCourseData.courseId.eq(qCourse.courseId))
                .leftJoin(qTouristImgPath).on(qTouristImgPath.touristId.eq(qCourseData.touristId))
                .where(qCourse.courseId.eq(courseId).and(qCourseData.courseDataId.eq(1)))
                .groupBy(qCourse.courseId)
                .fetch();
    }
}
