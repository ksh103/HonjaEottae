package com.ssafy.tourist.domain.record.db.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@IdClass(TagID.class)
@Table(name = "tag")
@ApiModel(value = "Tag", description = "태그 정보")
public class Tag {
    @ApiModelProperty(value = "태그 구분 번호", example = "1")
    @Id
    @Column(name = "tag_id")
    private int tagId;

    @ApiModelProperty(value = "태그 코드 구분 번호", example = "1")
    @Id
    @Column(name = "code")
    private int code;

    @ApiModelProperty(value = "태그 명", required = true, example = "자연")
    @Column(name = "tag_name")
    private String tagName;
}
