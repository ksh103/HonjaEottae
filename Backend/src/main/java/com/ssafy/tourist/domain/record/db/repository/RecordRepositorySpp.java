package com.ssafy.tourist.domain.record.db.repository;

import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.tourist.domain.course.db.entity.QCourse;
import com.ssafy.tourist.domain.record.db.bean.RecordWriteList;
import com.ssafy.tourist.domain.record.db.entity.QRecord;
import com.ssafy.tourist.domain.record.db.entity.QRecordImgPath;
import com.ssafy.tourist.domain.user.db.entity.QUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class RecordRepositorySpp {
    @Autowired
    private JPAQueryFactory jpaQueryFactory;

    QRecord qRecord = QRecord.record;
    QRecordImgPath qRecordImgPath = QRecordImgPath.recordImgPath;

    QCourse qCourse = QCourse.course;

    QUser qUser = QUser.user;

    public List<RecordWriteList> findRecordWriteList (int userId, int courseId) {
        return jpaQueryFactory.select(Projections.constructor(RecordWriteList.class, qRecord.recordId, qRecord.userId, qRecord.courseId,
                        qRecord.recordContent, qRecord.recordRegDt, qRecordImgPath.fileId)).from(qRecord)
                .leftJoin(qRecordImgPath).on(qRecordImgPath.recordId.eq(qRecord.recordId))
                .leftJoin(qCourse).on(qCourse.courseId.eq(qRecord.courseId))
                .leftJoin(qUser).on(qUser.userId.eq(qRecord.userId))
                .where(qRecord.userId.eq(userId).and(qRecord.courseId.eq(courseId)))
                .fetch();
    }

}
