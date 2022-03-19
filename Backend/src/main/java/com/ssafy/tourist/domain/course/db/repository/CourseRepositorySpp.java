package com.ssafy.tourist.domain.course.db.repository;

import com.querydsl.core.QueryResults;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.tourist.domain.course.db.entity.Course;
import com.ssafy.tourist.domain.course.db.entity.CourseData;
import com.ssafy.tourist.domain.course.db.entity.QBookmark;
import com.ssafy.tourist.domain.course.db.entity.QCourse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CourseRepositorySpp {
    @Autowired
    private JPAQueryFactory jpaQueryFactory;
    QCourse qCourse = QCourse.course;
    QBookmark qBookmark = QBookmark.bookmark;

    public List<Course> findBookmarkCourse (int userId) {
        return jpaQueryFactory.select(qCourse).from(qCourse)
                .leftJoin(qBookmark).on(qBookmark.courseId.eq(qCourse.courseId))
                .where(qBookmark.userId.eq(userId))
                .fetch();
    }

    public Page<Course>  findPopularCourse (Pageable pageable) {
        QueryResults<Course> list = jpaQueryFactory.select(qCourse).from(qCourse)
                .orderBy(qCourse.courseHits.desc())
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize()).fetchResults();

        return new PageImpl<>(list.getResults(), pageable, list.getTotal());
    }
}
