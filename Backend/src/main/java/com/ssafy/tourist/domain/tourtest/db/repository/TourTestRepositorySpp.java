package com.ssafy.tourist.domain.tourtest.db.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.tourist.domain.user.db.entity.QUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class TourTestRepositorySpp {

    @Autowired
    private JPAQueryFactory jpaQueryFactory;
    
}
