package com.ssafy.tourist.domain.record.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QRecord is a Querydsl query type for Record
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QRecord extends EntityPathBase<Record> {

    private static final long serialVersionUID = 1762641506L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QRecord record = new QRecord("record");

    public final NumberPath<Integer> courseId = createNumber("courseId", Integer.class);

    public final StringPath recordContent = createString("recordContent");

    public final NumberPath<Integer> recordId = createNumber("recordId", Integer.class);

    public final QRecordImgPath recordImgPath;

    public final DateTimePath<java.time.LocalDateTime> recordRegDt = createDateTime("recordRegDt", java.time.LocalDateTime.class);

    public final com.ssafy.tourist.domain.user.db.entity.QUser user;

    public final NumberPath<Integer> userId = createNumber("userId", Integer.class);

    public QRecord(String variable) {
        this(Record.class, forVariable(variable), INITS);
    }

    public QRecord(Path<? extends Record> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QRecord(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QRecord(PathMetadata metadata, PathInits inits) {
        this(Record.class, metadata, inits);
    }

    public QRecord(Class<? extends Record> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.recordImgPath = inits.isInitialized("recordImgPath") ? new QRecordImgPath(forProperty("recordImgPath")) : null;
        this.user = inits.isInitialized("user") ? new com.ssafy.tourist.domain.user.db.entity.QUser(forProperty("user")) : null;
    }

}

