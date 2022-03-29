package com.ssafy.tourist.domain.course.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QTourist is a Querydsl query type for Tourist
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QTourist extends EntityPathBase<Tourist> {

    private static final long serialVersionUID = -1491358581L;

    public static final QTourist tourist = new QTourist("tourist");

    public final StringPath touristAddress = createString("touristAddress");

    public final NumberPath<Integer> touristId = createNumber("touristId", Integer.class);

    public final ListPath<TouristImgPath, QTouristImgPath> touristImgPath = this.<TouristImgPath, QTouristImgPath>createList("touristImgPath", TouristImgPath.class, QTouristImgPath.class, PathInits.DIRECT2);

    public final NumberPath<Double> touristLat = createNumber("touristLat", Double.class);

    public final NumberPath<Double> touristLng = createNumber("touristLng", Double.class);

    public final StringPath touristName = createString("touristName");

    public final StringPath touristSummary = createString("touristSummary");

    public QTourist(String variable) {
        super(Tourist.class, forVariable(variable));
    }

    public QTourist(Path<? extends Tourist> path) {
        super(path.getType(), path.getMetadata());
    }

    public QTourist(PathMetadata metadata) {
        super(Tourist.class, metadata);
    }

}

