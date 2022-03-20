package com.ssafy.tourist.domain.record.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QRecordTag is a Querydsl query type for RecordTag
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QRecordTag extends EntityPathBase<RecordTag> {

    private static final long serialVersionUID = 583028184L;

    public static final QRecordTag recordTag = new QRecordTag("recordTag");

    public final NumberPath<Integer> code = createNumber("code", Integer.class);

    public final NumberPath<Integer> courseId = createNumber("courseId", Integer.class);

    public final BooleanPath isSelect = createBoolean("isSelect");

    public final NumberPath<Integer> recordId = createNumber("recordId", Integer.class);

    public final NumberPath<Integer> tagId = createNumber("tagId", Integer.class);

    public QRecordTag(String variable) {
        super(RecordTag.class, forVariable(variable));
    }

    public QRecordTag(Path<? extends RecordTag> path) {
        super(path.getType(), path.getMetadata());
    }

    public QRecordTag(PathMetadata metadata) {
        super(RecordTag.class, metadata);
    }

}

