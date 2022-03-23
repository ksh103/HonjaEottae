package com.ssafy.tourist.domain.course.db.repository;

import com.querydsl.core.Tuple;
import com.querydsl.core.types.ExpressionUtils;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.JPAExpressions;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.tourist.domain.course.db.bean.TourTestResult;
import com.ssafy.tourist.domain.course.db.entity.*;
import com.ssafy.tourist.domain.record.db.entity.QRecord;
import com.ssafy.tourist.domain.record.db.entity.QTour;
import com.ssafy.tourist.domain.record.db.entity.Record;
import com.ssafy.tourist.domain.record.db.entity.Tour;
import com.ssafy.tourist.domain.tourtest.db.entity.QTourTest;
import com.ssafy.tourist.domain.tourtest.db.entity.TourTest;
import com.ssafy.tourist.domain.user.db.entity.QUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CourseDetailRepositorySpp {
    @Autowired
    JPAQueryFactory jpaQueryFactory;

    QCourse qCourse = QCourse.course;
    QCourseData qCourseData = QCourseData.courseData;
    QTourist qTourist = QTourist.tourist;

    QTour qTour = QTour.tour;
    QRecord qRecord = QRecord.record;

    QUser qUser = QUser.user;

    QTourTest qTourTest = QTourTest.tourTest;


    public List<CourseData> courseDataDetailByCourseId(int courseId) {
        return jpaQueryFactory.select(qCourseData).from(qCourseData)
                .leftJoin(qTourist).on(qTourist.touristId.eq(qCourseData.touristId))
                .leftJoin(qCourse).on(qCourse.courseId.eq(qCourseData.courseId))
                .where(qCourse.courseId.eq(courseId))
                .fetch();
    }

    public List<Record> courseRecordDetailByCourseId(int courseId) {
        return jpaQueryFactory.select(qRecord).from(qRecord)
                .leftJoin(qUser).on(qUser.userId.eq(qRecord.userId))
                .where(qRecord.courseId.eq(courseId))
                .fetch();
    }


    public List<TourTestResult> courseTourTestResultDetailByCourseId(int courseId) {
        return jpaQueryFactory.select(Projections.constructor(TourTestResult.class, qTourTest.tourTestId.as("tourTestId"), qTourTest.tourTestName.as("tourTestName"), qTourTest.tourTestId.count().as("tourTestCount")))
                .from(qTourTest)
                .leftJoin(qUser).on(qUser.tourTestId.eq(qTourTest.tourTestId))
                .leftJoin(qTour).on(qUser.userId.eq(qTour.userId))
                .leftJoin(qCourse).on(qCourse.courseId.eq(qTour.courseId))
                .where(qTour.isStart.eq(true).and(qCourse.courseId.eq(courseId)))
                .groupBy(qTourTest.tourTestId)
                .fetch();
    }
}
