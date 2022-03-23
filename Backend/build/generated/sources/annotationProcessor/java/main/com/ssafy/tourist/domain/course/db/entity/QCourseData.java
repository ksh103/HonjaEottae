package com.ssafy.tourist.domain.course.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QCourseData is a Querydsl query type for CourseData
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QCourseData extends EntityPathBase<CourseData> {

    private static final long serialVersionUID = 1690981996L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QCourseData courseData = new QCourseData("courseData");

    public final QCourse course;

    public final NumberPath<Integer> courseDataId = createNumber("courseDataId", Integer.class);

    public final StringPath courseDataName = createString("courseDataName");

    public final NumberPath<Integer> courseId = createNumber("courseId", Integer.class);

    public final QTourist tourist;

    public final NumberPath<Integer> touristId = createNumber("touristId", Integer.class);

    public QCourseData(String variable) {
        this(CourseData.class, forVariable(variable), INITS);
    }

    public QCourseData(Path<? extends CourseData> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QCourseData(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QCourseData(PathMetadata metadata, PathInits inits) {
        this(CourseData.class, metadata, inits);
    }

    public QCourseData(Class<? extends CourseData> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.course = inits.isInitialized("course") ? new QCourse(forProperty("course")) : null;
        this.tourist = inits.isInitialized("tourist") ? new QTourist(forProperty("tourist")) : null;
    }

}

