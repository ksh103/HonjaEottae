package com.ssafy.tourist.domain.course.service;

import com.ssafy.tourist.domain.course.db.entity.Tourist;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface TouristService {
    Page<Tourist> touristSearchByUser(String keywords, Pageable pageable);
    List<Tourist> locationTouristByUser(double lat, double lng);

    String getTouristImgPath(int fileId, int touristId);
}
