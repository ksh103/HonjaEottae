package com.ssafy.tourist.domain.record.db.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@IdClass(RecordTagID.class)
@Table(name = "record_tag")
@ApiModel(value = "RecordTag", description = "여행 레코드(일기) 태그 정보")
public class RecordTag {
    @ApiModelProperty(value = "여행 레코드(일기) 구분 번호", example = "1")
    @Id
    @Column(name = "record_id")
    private int recordId;

    @ApiModelProperty(value = "코스 구분 번호", example = "1")
    @Id
    @Column(name = "course_id")
    private int courseId;

    @ApiModelProperty(value = "태그 코드 구분 번호", example = "1")
    @Id
    @Column(name = "code")
    private int code;

    @ApiModelProperty(value = "태그 구분 번호", example = "1")
    @Id
    @Column(name = "tag_id")
    private int tagId;

    @ApiModelProperty(value = "태그 선택 여부", example = "true")
    @Column(name = "is_select")
    private boolean isSelect;
}
