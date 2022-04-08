package com.ssafy.tourist.domain.record.db.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QTagCode is a Querydsl query type for TagCode
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QTagCode extends EntityPathBase<TagCode> {

    private static final long serialVersionUID = 470183094L;

    public static final QTagCode tagCode = new QTagCode("tagCode");

    public final NumberPath<Integer> code = createNumber("code", Integer.class);

    public final StringPath codeName = createString("codeName");

    public final ListPath<Tag, QTag> tag = this.<Tag, QTag>createList("tag", Tag.class, QTag.class, PathInits.DIRECT2);

    public QTagCode(String variable) {
        super(TagCode.class, forVariable(variable));
    }

    public QTagCode(Path<? extends TagCode> path) {
        super(path.getType(), path.getMetadata());
    }

    public QTagCode(PathMetadata metadata) {
        super(TagCode.class, metadata);
    }

}

