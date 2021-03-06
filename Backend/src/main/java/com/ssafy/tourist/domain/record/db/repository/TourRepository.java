package com.ssafy.tourist.domain.record.db.repository;

import com.querydsl.core.types.Projections;
import com.ssafy.tourist.domain.record.db.bean.TourIsStart;
import com.ssafy.tourist.domain.record.db.entity.Tour;
import com.ssafy.tourist.domain.record.db.entity.TourID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;

@Repository
public interface TourRepository extends JpaRepository<Tour, TourID> {

    @Modifying(clearAutomatically = true)
    @Transactional
    @Query("update Tour t set t.tourEnd = current_timestamp, t.isEnd = 1 where t.userId = :userId and t.courseId = :courseId")
    int tourEndByUser(int userId, int courseId);

    @Query("select t.isStart from Tour t where t.userId = :userId and t.courseId = :courseId")
    boolean existsTourByUserIdAndCourseId(int userId, int courseId);

    @Query("select count(t.isStart) from Tour t where t.isStart = true and t.userId = :userId")
    int isStartByUserIdAndCourseId(int userId);

    @Query("select count(t.isEnd) from Tour t where t.isEnd = true and t.userId = :userId")
    int isEndByUserIdAndCourseId(int userId);

    @Query("select count(t.isStart) from Tour t where t.isStart = true and t.isEnd = false")
    int countTour();

    @Query("select count(t.isStart) from Tour t where t.courseId =:courseId and t.isStart = true and t.isEnd = false")
    int countToursByCourseId(int courseId);

}
