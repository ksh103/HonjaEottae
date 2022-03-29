package com.ssafy.tourist.domain.course.db.repository;

import com.ssafy.tourist.domain.course.db.entity.TouristImgPath;
import com.ssafy.tourist.domain.course.db.entity.TouristImgPathID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TouristImgPathRepository extends JpaRepository<TouristImgPath, TouristImgPathID> {

    TouristImgPath findTouristImgPathByFileIdAndTouristId(int fileId, int touristId);
}
