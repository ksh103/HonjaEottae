package com.ssafy.tourist.domain.course.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QTouristImgPath is a Querydsl query type for TouristImgPath
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QTouristImgPath extends EntityPathBase<TouristImgPath> {

    private static final long serialVersionUID = -1150902403L;

    public static final QTouristImgPath touristImgPath = new QTouristImgPath("touristImgPath");

    public final NumberPath<Integer> fileId = createNumber("fileId", Integer.class);

    public final DateTimePath<java.time.LocalDateTime> fileRegDt = createDateTime("fileRegDt", java.time.LocalDateTime.class);

    public final StringPath fileUrl = createString("fileUrl");

    public final NumberPath<Integer> touristId = createNumber("touristId", Integer.class);

    public final StringPath touristName = createString("touristName");

    public QTouristImgPath(String variable) {
        super(TouristImgPath.class, forVariable(variable));
    }

    public QTouristImgPath(Path<? extends TouristImgPath> path) {
        super(path.getType(), path.getMetadata());
    }

    public QTouristImgPath(PathMetadata metadata) {
        super(TouristImgPath.class, metadata);
    }

}

