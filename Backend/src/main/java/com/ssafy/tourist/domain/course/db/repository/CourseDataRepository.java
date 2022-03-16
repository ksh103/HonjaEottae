package com.ssafy.tourist.domain.course.db.repository;

import com.ssafy.tourist.domain.course.db.entity.CourseData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseDataRepository extends JpaRepository<CourseData, Integer> {

    @Query("select count(c) from CourseData c where c.courseId = :courseId")
    int courDataCount(int courseId); // 코스에 포함된 관광지 개수

}
