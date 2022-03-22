package com.ssafy.tourist.domain.tourtest.db.repository;

import com.ssafy.tourist.domain.tourtest.db.entity.TourTest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface TourTestRepository extends JpaRepository<TourTest, Integer> {

    @Modifying(clearAutomatically = true)
    @Transactional
    @Query("update TourTest t set t.tourTestResult = t.tourTestResult + 1 where t.tourTestId = :tourTestId")
    int tourTestResultCountByUser(int tourTestId); // update/delete 문은 return type이 int/Integer이어야함.

    @Modifying(clearAutomatically = true)
    @Transactional
    @Query("update TourTest t set t.tourTestResult = t.tourTestResult - 1 where t.tourTestId = :tourTestId")
    int tourTestBeforeCountByUser(int tourTestId); // update/delete 문은 return type이 int/Integer이어야함.
}
