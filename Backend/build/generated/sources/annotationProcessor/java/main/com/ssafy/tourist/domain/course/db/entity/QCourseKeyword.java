package com.ssafy.tourist.domain.course.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QCourseKeyword is a Querydsl query type for CourseKeyword
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QCourseKeyword extends EntityPathBase<CourseKeyword> {

    private static final long serialVersionUID = -1884280857L;

    public static final QCourseKeyword courseKeyword = new QCourseKeyword("courseKeyword");

    public final NumberPath<Integer> courseId = createNumber("courseId", Integer.class);

    public final NumberPath<Integer> keywordId = createNumber("keywordId", Integer.class);

    public final StringPath keywordName = createString("keywordName");

    public QCourseKeyword(String variable) {
        super(CourseKeyword.class, forVariable(variable));
    }

    public QCourseKeyword(Path<? extends CourseKeyword> path) {
        super(path.getType(), path.getMetadata());
    }

    public QCourseKeyword(PathMetadata metadata) {
        super(CourseKeyword.class, metadata);
    }

}

