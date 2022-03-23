package com.ssafy.tourist.domain.course.db.repository;

import com.ssafy.tourist.domain.course.db.entity.Tourist;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TouristRepository extends JpaRepository<Tourist, Integer> {

    @Query(value = "select *, (6371*acos(cos(radians(:lat))*cos(radians(tourist_lat))*cos(radians(tourist_lng)-radians(:lng))+sin(radians(:lat))*sin(radians(tourist_lat)))) AS distance " +
            "FROM tourist " +
            "HAVING distance <= 2 " +
            "ORDER BY distance " +
            "LIMIT 5", nativeQuery = true)
    List<Tourist> findLocationTouristBy(double lat, double lng);

}
