package com.ssafy.tourist.domain.course.db.repository;

import com.querydsl.core.QueryResults;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.tourist.domain.course.db.entity.QTourist;
import com.ssafy.tourist.domain.course.db.entity.Tourist;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;


@Repository
public class TouristRepositorySpp {

    @Autowired
    private JPAQueryFactory jpaQueryFactory;

    QTourist qTourist = QTourist.tourist;


    public Page<Tourist> findTouristSearchByUser(String keywords, Pageable pageable) {
        QueryResults<Tourist> list = jpaQueryFactory.select(qTourist).from(qTourist)
                .where(qTourist.touristName.contains(keywords).or(qTourist.touristAddress.contains(keywords)))
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize()).fetchResults();

        return new PageImpl<>(list.getResults(), pageable, list.getTotal());
    }

}
