package com.ssafy.tourist.domain.course.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QAreaCount is a Querydsl query type for AreaCount
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QAreaCount extends EntityPathBase<AreaCount> {

    private static final long serialVersionUID = 401779611L;

    public static final QAreaCount areaCount1 = new QAreaCount("areaCount1");

    public final NumberPath<Integer> areaCount = createNumber("areaCount", Integer.class);

    public final NumberPath<Integer> areaId = createNumber("areaId", Integer.class);

    public final StringPath areaName = createString("areaName");

    public final NumberPath<Integer> areaX = createNumber("areaX", Integer.class);

    public final NumberPath<Integer> areaY = createNumber("areaY", Integer.class);

    public QAreaCount(String variable) {
        super(AreaCount.class, forVariable(variable));
    }

    public QAreaCount(Path<? extends AreaCount> path) {
        super(path.getType(), path.getMetadata());
    }

    public QAreaCount(PathMetadata metadata) {
        super(AreaCount.class, metadata);
    }

}

