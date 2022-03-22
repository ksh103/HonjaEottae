package com.ssafy.tourist.domain.course.service;

import com.ssafy.tourist.domain.course.db.entity.Tourist;
import com.ssafy.tourist.domain.course.db.repository.CourseRepositorySpp;
import com.ssafy.tourist.domain.course.db.repository.TouristRepository;
import com.ssafy.tourist.domain.course.db.repository.TouristRepositorySpp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TouristServiceImpl implements TouristService{

    @Autowired
    TouristRepository touristRepository;

    @Autowired
    TouristRepositorySpp touristRepositorySpp;


    @Override
    public Page<Tourist> touristSearchByUser(String keywords, Pageable pageable) { return touristRepositorySpp.findTouristSearchByUser(keywords, pageable); }

    @Override
    public List<Tourist> locationTouristByUser(double lat, double lng) { return touristRepository.findLocationTouristBy(lat, lng); }
}
