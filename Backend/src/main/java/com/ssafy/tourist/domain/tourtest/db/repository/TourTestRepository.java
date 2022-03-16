package com.ssafy.tourist.domain.tourtest.db.repository;

import com.ssafy.tourist.domain.tourtest.db.entity.TourTest;
import com.ssafy.tourist.domain.tourtest.db.entity.TourTestID;
import com.ssafy.tourist.domain.user.db.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface TourTestRepository extends JpaRepository<TourTest, TourTestID> {

}
