package com.ssafy.tourist.domain.course.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QCourseData is a Querydsl query type for CourseData
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QCourseData extends EntityPathBase<CourseData> {

    private static final long serialVersionUID = 1690981996L;

    public static final QCourseData courseData = new QCourseData("courseData");

    public final NumberPath<Integer> courseDataId = createNumber("courseDataId", Integer.class);

    public final StringPath courseDataName = createString("courseDataName");

    public final NumberPath<Integer> courseId = createNumber("courseId", Integer.class);

    public QCourseData(String variable) {
        super(CourseData.class, forVariable(variable));
    }

    public QCourseData(Path<? extends CourseData> path) {
        super(path.getType(), path.getMetadata());
    }

    public QCourseData(PathMetadata metadata) {
        super(CourseData.class, metadata);
    }

}

