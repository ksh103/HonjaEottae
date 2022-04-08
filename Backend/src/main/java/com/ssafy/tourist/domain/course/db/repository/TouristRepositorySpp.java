package com.ssafy.tourist.domain.course.db.repository;

import com.querydsl.core.QueryResults;
import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.tourist.domain.course.db.bean.TouristSearch;
import com.ssafy.tourist.domain.course.db.entity.QTourist;
import com.ssafy.tourist.domain.course.db.entity.QTouristImgPath;
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
    QTouristImgPath qTouristImgPath = QTouristImgPath.touristImgPath;


    public Page<TouristSearch> findTouristSearchByUser(String keywords, Pageable pageable) {
        QueryResults<TouristSearch> list = jpaQueryFactory.select(Projections.constructor(TouristSearch.class, qTourist.touristId, qTourist.touristName, qTouristImgPath.fileId.min().as("fileId"))).from(qTourist)
                .leftJoin(qTouristImgPath).on(qTouristImgPath.touristId.eq(qTourist.touristId))
                .where(qTourist.touristName.contains(keywords).or(qTourist.touristAddress.contains(keywords)))
                .groupBy(qTourist.touristId)
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize()).fetchResults();

        return new PageImpl<>(list.getResults(), pageable, list.getTotal());
    }

}
