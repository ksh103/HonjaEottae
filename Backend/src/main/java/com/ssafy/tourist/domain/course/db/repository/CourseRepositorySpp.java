package com.ssafy.tourist.domain.course.db.repository;

import com.querydsl.core.QueryResults;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.tourist.domain.course.db.bean.AreaPopularCourse;
import com.ssafy.tourist.domain.course.db.bean.BookmarkCourse;
import com.ssafy.tourist.domain.course.db.bean.CourseInfo;
import com.ssafy.tourist.domain.course.db.bean.KeywordCourse;
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
    QTourist qTourist = QTourist.tourist;
    QCourseKeyword qCourseKeyword = QCourseKeyword.courseKeyword;

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
                .orderBy(qCourse.courseId.desc())
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize()).fetchResults();

        return new PageImpl<>(list.getResults(), pageable, list.getTotal());
    }

    //지역 인기 코스 조회
    public List<AreaPopularCourse> findPopularCourse (String areaName) {

        return  jpaQueryFactory.select(Projections.constructor(AreaPopularCourse.class,
                        qCourse.courseId, qCourse.courseName,qBookmark.courseId.count().as("countA")))
                .from(qCourse)
                .leftJoin(qCourseData).on(qCourseData.courseId.eq(qCourse.courseId))
                .leftJoin(qTourist).on(qTourist.touristId.eq(qTourist.touristId))
                .leftJoin(qBookmark).on(qBookmark.courseId.eq(qCourse.courseId))
                .where(qCourseData.courseDataId.eq(1)
                        .and(qTourist.touristAddress.substring(0, 4).eq(areaName))
                        .and(qCourseData.touristId.eq(qTourist.touristId)))
                .groupBy(qCourse.courseId, qCourse.courseName)
                .orderBy(qBookmark.courseId.count().desc()).limit(5)
                .fetch();

    }


    //키워드 추천 코스
    public List<KeywordCourse> keywordCourseList(String keywordName){
        return jpaQueryFactory.select(Projections.constructor(KeywordCourse.class,
                        qCourse.courseName,qCourse.courseId,qTouristImgPath.fileId.min(),qCourseKeyword.keywordId,
                        qCourseKeyword.keywordName,qCourseData.touristId)).from(qCourseKeyword)
                .leftJoin(qCourse).on(qCourse.courseId.eq(qCourseKeyword.courseId))
                .leftJoin(qCourseData).on(qCourseData.courseId.eq(qCourseKeyword.courseId))
                .leftJoin(qTouristImgPath).on(qTouristImgPath.touristId.eq(qCourseData.touristId))
                .where(qCourseData.courseDataId.eq(1).and(qCourseKeyword.keywordName.eq(keywordName))
                )
                .groupBy(qCourse.courseName,qCourseKeyword.keywordId).limit(20).fetch();
    }

}
