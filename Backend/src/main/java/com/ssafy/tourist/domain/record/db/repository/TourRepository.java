package com.ssafy.tourist.domain.record.db.repository;

import com.ssafy.tourist.domain.record.db.entity.Tour;
import com.ssafy.tourist.domain.record.db.entity.TourID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface TourRepository extends JpaRepository<Tour, TourID> {

    @Modifying(clearAutomatically = true)
    @Transactional
    @Query(value = "update Tour t set t.tourEnd = current_timestamp where t.userId = :userId and t.courseId = :courseId")
    int tourEndByUser(int userId, int courseId);
}
