package com.ssafy.tourist.domain.course.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QCourse is a Querydsl query type for Course
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QCourse extends EntityPathBase<Course> {

    private static final long serialVersionUID = 1681953698L;

    public static final QCourse course = new QCourse("course");

    public final StringPath courseContent = createString("courseContent");

    public final StringPath courseDays = createString("courseDays");

    public final StringPath courseDistance = createString("courseDistance");

    public final NumberPath<Integer> courseHits = createNumber("courseHits", Integer.class);

    public final NumberPath<Integer> courseId = createNumber("courseId", Integer.class);

    public final StringPath courseName = createString("courseName");

    public final BooleanPath isRegister = createBoolean("isRegister");

    public final NumberPath<Integer> userId = createNumber("userId", Integer.class);

    public QCourse(String variable) {
        super(Course.class, forVariable(variable));
    }

    public QCourse(Path<? extends Course> path) {
        super(path.getType(), path.getMetadata());
    }

    public QCourse(PathMetadata metadata) {
        super(Course.class, metadata);
    }

}

