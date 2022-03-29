package com.ssafy.tourist.domain.course.db.repository;

import com.mysema.commons.lang.Assert;
import com.querydsl.core.QueryResults;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.tourist.domain.course.db.bean.BookmarkCourse;
import com.ssafy.tourist.domain.course.db.entity.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import java.util.List;

import static com.querydsl.core.types.Projections.list;

@Repository
public class CourseRepositorySpp {
    @Autowired
    private JPAQueryFactory jpaQueryFactory;

    QCourse qCourse = QCourse.course;
    QCourseData qCourseData = QCourseData.courseData;
    QTouristImgPath qTouristImgPath = QTouristImgPath.touristImgPath;
    QBookmark qBookmark = QBookmark.bookmark;


    public List<BookmarkCourse> findBookmarkCourse(int userId) {
        return jpaQueryFactory.select(Projections.constructor(BookmarkCourse.class, qCourse.courseId, qCourse.courseName, qCourseData.touristId, qTouristImgPath.fileId.min().as("fileId"))).from(qCourse)
                .leftJoin(qCourseData).on(qCourseData.courseId.eq(qCourse.courseId))
                .leftJoin(qBookmark).on(qBookmark.courseId.eq(qCourse.courseId))
                .leftJoin(qTouristImgPath).on(qTouristImgPath.touristId.eq(qCourseData.touristId))
                .where(qCourseData.courseDataId.eq(1).and(qBookmark.userId.eq(userId)))
                .groupBy(qCourse.courseId)
                .fetch();
    }

    public Page<Course> findPopularCourse (Pageable pageable) {
        QueryResults<Course> list = jpaQueryFactory.select(qCourse).from(qCourse)
                .orderBy(qCourse.courseHits.desc())
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize()).fetchResults();

        return new PageImpl<>(list.getResults(), pageable, list.getTotal());
    }

    public Page<Course> findCourseSearch (String courseName, Pageable pageable) {
        QueryResults<Course> list = jpaQueryFactory.select(qCourse).from(qCourse)
                .where(qCourse.courseName.contains(courseName))
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize()).fetchResults();

        return new PageImpl<>(list.getResults(), pageable, list.getTotal());
    }

    public Page<Course> findCourseListByUser (int userId, Pageable pageable) {
        QueryResults<Course> list = jpaQueryFactory.select(qCourse).from(qCourse)
                .where(qCourse.userId.eq(userId).and(qCourse.isRegister.eq(true)))
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize()).fetchResults();

        return new PageImpl<>(list.getResults(), pageable, list.getTotal());
    }
}
