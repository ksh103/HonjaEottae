package com.ssafy.tourist.domain.course.db.repository;

import com.querydsl.core.types.Projections;
import com.ssafy.tourist.domain.course.db.bean.CourseTourCountDetail;
import com.ssafy.tourist.domain.course.db.entity.CourseData;
import com.ssafy.tourist.domain.course.db.entity.CourseDataID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseDataRepository extends JpaRepository<CourseData, CourseDataID> {

    @Query("select count(c.courseId) from CourseData c where c.courseId = :courseId")
    int countCourseDataByCourseId(int courseId); // 코스에 포함된 관광지 개수


    @Query("select count(u.userId) from Tour t " +
            "left join User u on u.userId = t.userId " +
            "left join Course c on c.courseId = t.courseId " +
            "where t.courseId = :courseId and t.isStart = true and t.isEnd = false")
    int countCourseTourUser(int courseId);
}
