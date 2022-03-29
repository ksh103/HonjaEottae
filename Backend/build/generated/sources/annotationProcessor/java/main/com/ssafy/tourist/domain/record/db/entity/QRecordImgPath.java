package com.ssafy.tourist.domain.record.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;


/**
 * QRecordImgPath is a Querydsl query type for RecordImgPath
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QRecordImgPath extends EntityPathBase<RecordImgPath> {

    private static final long serialVersionUID = -630123066L;

    public static final QRecordImgPath recordImgPath = new QRecordImgPath("recordImgPath");

    public final NumberPath<Integer> courseId = createNumber("courseId", Integer.class);

    public final StringPath fileContent = createString("fileContent");

    public final NumberPath<Integer> fileId = createNumber("fileId", Integer.class);

    public final StringPath fileName = createString("fileName");

    public final DateTimePath<java.time.LocalDateTime> fileRegDt = createDateTime("fileRegDt", java.time.LocalDateTime.class);

    public final NumberPath<Long> fileSize = createNumber("fileSize", Long.class);

    public final StringPath fileUrl = createString("fileUrl");

    public final NumberPath<Integer> recordId = createNumber("recordId", Integer.class);

    public QRecordImgPath(String variable) {
        super(RecordImgPath.class, forVariable(variable));
    }

    public QRecordImgPath(Path<? extends RecordImgPath> path) {
        super(path.getType(), path.getMetadata());
    }

    public QRecordImgPath(PathMetadata metadata) {
        super(RecordImgPath.class, metadata);
    }

}

