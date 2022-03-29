package com.ssafy.tourist.domain.course.db.repository;

import com.querydsl.core.QueryResults;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.tourist.domain.course.db.bean.BookmarkCourse;
import com.ssafy.tourist.domain.course.db.bean.CourseInfo;
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


    // 북마크한 코스 조회
    public List<BookmarkCourse> findBookmarkCourse(int userId) {
        return jpaQueryFactory.select(Projections.constructor(BookmarkCourse.class, qCourse.courseId, qCourse.courseName, qCourseData.touristId, qTouristImgPath.fileId.min().as("fileId"))).from(qCourse)
                .leftJoin(qCourseData).on(qCourseData.courseId.eq(qCourse.courseId))
                .leftJoin(qBookmark).on(qBookmark.courseId.eq(qCourse.courseId))
                .leftJoin(qTouristImgPath).on(qTouristImgPath.touristId.eq(qCourseData.touristId))
                .where(qCourseData.courseDataId.eq(1).and(qBookmark.userId.eq(userId)))
                .groupBy(qCourse.courseId)
                .fetch();
    }

    // 인기 있는 코스
    public Page<CourseInfo> findPopularCourse (Pageable pageable) {
        QueryResults<CourseInfo> list = jpaQueryFactory.select(Projections.constructor(CourseInfo.class, qCourse.courseId, qCourse.courseName,
                        qCourseData.touristId, qTouristImgPath.fileId.min().as("fileId"))).from(qCourse)
                .leftJoin(qCourseData).on(qCourseData.courseId.eq(qCourse.courseId))
                .leftJoin(qTouristImgPath).on(qTouristImgPath.touristId.eq(qCourseData.touristId))
                .leftJoin(qBookmark).on(qBookmark.courseId.eq(qCourse.courseId))
                .where(qCourseData.courseDataId.eq(1))
                .groupBy(qCourse.courseId)
                .orderBy(qCourse.courseHits.desc())
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize()).fetchResults();

        return new PageImpl<>(list.getResults(), pageable, list.getTotal());
    }
    
    
    // 코스 검색
    public Page<CourseInfo> findCourseSearch (String courseName, Pageable pageable) {
        QueryResults<CourseInfo> list = jpaQueryFactory.select(Projections.constructor(CourseInfo.class, qCourse.courseId, qCourse.courseName,
                        qCourseData.touristId, qTouristImgPath.fileId.min().as("fileId"))).from(qCourse)
                .leftJoin(qCourseData).on(qCourseData.courseId.eq(qCourse.courseId))
                .leftJoin(qTouristImgPath).on(qTouristImgPath.touristId.eq(qCourseData.touristId))
                .where(qCourse.courseName.contains(courseName).and(qCourseData.courseDataId.eq(1)))
                .groupBy(qCourse.courseId)
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize()).fetchResults();

        return new PageImpl<>(list.getResults(), pageable, list.getTotal());
    }

    // 사용자 생성 코스 조회
    public Page<CourseInfo> findCourseListByUser (int userId, Pageable pageable) {
        QueryResults<CourseInfo> list = jpaQueryFactory.select(Projections.constructor(CourseInfo.class, qCourse.courseId, qCourse.courseName,
                        qCourseData.touristId, qTouristImgPath.fileId.min().as("fileId"))).from(qCourse)
                .leftJoin(qCourseData).on(qCourseData.courseId.eq(qCourse.courseId))
                .leftJoin(qTouristImgPath).on(qTouristImgPath.touristId.eq(qCourseData.touristId))
                .where(qCourse.userId.eq(userId).and(qCourse.isRegister.eq(true)).and(qCourseData.courseDataId.eq(1)))
                .groupBy(qCourse.courseId)
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize()).fetchResults();

        return new PageImpl<>(list.getResults(), pageable, list.getTotal());
    }
}
