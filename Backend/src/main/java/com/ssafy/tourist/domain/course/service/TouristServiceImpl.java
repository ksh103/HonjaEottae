package com.ssafy.tourist.domain.course.service;

import com.ssafy.tourist.domain.course.db.entity.Tourist;
import com.ssafy.tourist.domain.course.db.repository.CourseRepositorySpp;
import com.ssafy.tourist.domain.course.db.repository.TouristRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class TouristServiceImpl implements TouristService{

    @Autowired
    TouristRepository touristRepository;

    @Autowired
    CourseRepositorySpp courseRepositorySpp;


    @Override
    public Page<Tourist> touristSearchByUser(String keywords, Pageable pageable) { return courseRepositorySpp.findTouristSearchByUser(keywords, pageable); }
}
