package com.ssafy.tourist.domain.tourtest.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QTourTest is a Querydsl query type for TourTest
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QTourTest extends EntityPathBase<TourTest> {

    private static final long serialVersionUID = -86044830L;

    public static final QTourTest tourTest = new QTourTest("tourTest");

    public final NumberPath<Integer> tourTestId = createNumber("tourTestId", Integer.class);

    public final StringPath tourTestName = createString("tourTestName");

    public final NumberPath<Integer> tourTestResult = createNumber("tourTestResult", Integer.class);

    public QTourTest(String variable) {
        super(TourTest.class, forVariable(variable));
    }

    public QTourTest(Path<? extends TourTest> path) {
        super(path.getType(), path.getMetadata());
    }

    public QTourTest(PathMetadata metadata) {
        super(TourTest.class, metadata);
    }

}

