package com.ssafy.tourist.domain.course.db.repository;


import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.tourist.domain.course.db.bean.CourseDetailUser;
import com.ssafy.tourist.domain.course.db.bean.CourseTagDetail;
import com.ssafy.tourist.domain.course.db.bean.CourseTourTestResultDetail;
import com.ssafy.tourist.domain.course.db.entity.*;
import com.ssafy.tourist.domain.record.db.entity.*;
import com.ssafy.tourist.domain.tourtest.db.entity.QTourTest;
import com.ssafy.tourist.domain.user.db.entity.QUser;
import org.springframework.beans.factory.annotation.Autowired;
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
    QRecordTag qRecordTag = QRecordTag.recordTag;

    QUser qUser = QUser.user;

    QTourTest qTourTest = QTourTest.tourTest;

    QTagCode qTagCode = QTagCode.tagCode;
    QTag qTag = QTag.tag;


    // 코스 상세보기 Query
    public List<CourseData> courseDataDetailByCourseId(int courseId) {
        return jpaQueryFactory.select(qCourseData).from(qCourseData)
                .leftJoin(qTourist).on(qTourist.touristId.eq(qCourseData.touristId))
                .leftJoin(qCourse).on(qCourse.courseId.eq(qCourseData.courseId))
                .where(qCourse.courseId.eq(courseId))
                .fetch();
    }


    // 코스 여행 레코드(일기) 조회 Query
    public List<Record> courseRecordDetailByCourseId(int courseId) {
        return jpaQueryFactory.select(qRecord).from(qRecord)
                .leftJoin(qUser).on(qUser.userId.eq(qRecord.userId))
                .where(qRecord.courseId.eq(courseId))
                .fetch();
    }


    // 코스 성향 분석 Query
    public List<CourseTourTestResultDetail> courseTourTestResultDetailByCourseId(int courseId) {
        return jpaQueryFactory.select(Projections.constructor(CourseTourTestResultDetail.class,
                        qTourTest.tourTestId.as("tourTestId"), qTourTest.tourTestName.as("tourTestName"),
                        qTourTest.tourTestId.count().as("tourTestCount")))
                .from(qTourTest)
                .leftJoin(qUser).on(qUser.tourTestId.eq(qTourTest.tourTestId))
                .leftJoin(qTour).on(qUser.userId.eq(qTour.userId))
                .leftJoin(qCourse).on(qCourse.courseId.eq(qTour.courseId))
                .where(qTour.isStart.eq(true).and(qCourse.courseId.eq(courseId)))
                .groupBy(qTourTest.tourTestId)
                .fetch();
    }

    // 코스 태그 Query
    public List<CourseTagDetail> courseTagDetailByCourseId(int courseId) {
        return jpaQueryFactory.selectDistinct(Projections.constructor(CourseTagDetail.class, qTag.tagName)).from(qRecordTag)
                .innerJoin(qTagCode).on(qTagCode.code.eq(qRecordTag.code))
                .innerJoin(qTag).on(qTag.tagId.eq(qRecordTag.tagId))
                .where(qRecordTag.isSelect.eq(true).and(qTag.code.eq(qTagCode.code).and(qRecordTag.courseId.eq(courseId))))
                .fetch();
    }
}
