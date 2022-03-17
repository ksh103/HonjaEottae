package com.ssafy.tourist.domain.record.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QTourStamp is a Querydsl query type for TourStamp
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QTourStamp extends EntityPathBase<TourStamp> {

    private static final long serialVersionUID = 364265626L;

    public static final QTourStamp tourStamp = new QTourStamp("tourStamp");

    public final NumberPath<Integer> courseDataId = createNumber("courseDataId", Integer.class);

    public final NumberPath<Integer> courseId = createNumber("courseId", Integer.class);

    public final NumberPath<Integer> isStamp = createNumber("isStamp", Integer.class);

    public final NumberPath<Integer> userId = createNumber("userId", Integer.class);

    public QTourStamp(String variable) {
        super(TourStamp.class, forVariable(variable));
    }

    public QTourStamp(Path<? extends TourStamp> path) {
        super(path.getType(), path.getMetadata());
    }

    public QTourStamp(PathMetadata metadata) {
        super(TourStamp.class, metadata);
    }

}

