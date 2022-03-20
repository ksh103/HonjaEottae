package com.ssafy.tourist.domain.record.db.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "tag_code")
@ApiModel(value = "TagCode", description = "태그 코드 정보")
public class TagCode {
    @ApiModelProperty(value = "태그 코드 구분 번호", example = "1")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "code")
    private int code;

    @ApiModelProperty(value = "태그 코드 명", example = "코스")
    @Column(name = "code_name")
    private String codeName;
}
