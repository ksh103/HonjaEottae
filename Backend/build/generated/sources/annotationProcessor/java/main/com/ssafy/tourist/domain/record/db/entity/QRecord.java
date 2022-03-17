package com.ssafy.tourist.domain.record.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QRecord is a Querydsl query type for Record
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QRecord extends EntityPathBase<Record> {

    private static final long serialVersionUID = 1762641506L;

    public static final QRecord record = new QRecord("record");

    public final NumberPath<Integer> courseId = createNumber("courseId", Integer.class);

    public final StringPath recordContent = createString("recordContent");

    public final NumberPath<Integer> recordId = createNumber("recordId", Integer.class);

    public final DateTimePath<java.time.LocalDateTime> recordRegDt = createDateTime("recordRegDt", java.time.LocalDateTime.class);

    public final NumberPath<Integer> userId = createNumber("userId", Integer.class);

    public QRecord(String variable) {
        super(Record.class, forVariable(variable));
    }

    public QRecord(Path<? extends Record> path) {
        super(path.getType(), path.getMetadata());
    }

    public QRecord(PathMetadata metadata) {
        super(Record.class, metadata);
    }

}

