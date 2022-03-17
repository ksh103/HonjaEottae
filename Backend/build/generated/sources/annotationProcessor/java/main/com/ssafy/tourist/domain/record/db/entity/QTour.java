package com.ssafy.tourist.domain.record.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QTour is a Querydsl query type for Tour
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QTour extends EntityPathBase<Tour> {

    private static final long serialVersionUID = -1459546967L;

    public static final QTour tour = new QTour("tour");

    public final NumberPath<Integer> courseId = createNumber("courseId", Integer.class);

    public final BooleanPath isEnd = createBoolean("isEnd");

    public final BooleanPath isStart = createBoolean("isStart");

    public final DateTimePath<java.time.LocalDateTime> tourEnd = createDateTime("tourEnd", java.time.LocalDateTime.class);

    public final DateTimePath<java.time.LocalDateTime> tourStart = createDateTime("tourStart", java.time.LocalDateTime.class);

    public final NumberPath<Integer> userId = createNumber("userId", Integer.class);

    public QTour(String variable) {
        super(Tour.class, forVariable(variable));
    }

    public QTour(Path<? extends Tour> path) {
        super(path.getType(), path.getMetadata());
    }

    public QTour(PathMetadata metadata) {
        super(Tour.class, metadata);
    }

}

