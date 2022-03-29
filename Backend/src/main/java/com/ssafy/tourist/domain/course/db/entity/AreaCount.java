package com.ssafy.tourist.domain.course.db.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name="area_count")
@ApiModel(value = "AreaCount", description = "지역별 관광지 개수 정보")
public class AreaCount {
    @ApiModelProperty(value = "지역별 관광지 인덱스", example = "1")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "area_id")
    private int areaId;

    @ApiModelProperty(value = "지역명", example = "서울")
    @Column(name = "area_name")
    private String areaName;

    @ApiModelProperty(value = "지역 x", example = "x")
    @Column(name = "area_x")
    private int areaX;

    @ApiModelProperty(value = "지역 y", example = "y")
    @Column(name = "area_y")
    private int areaY;

    @ApiModelProperty(value = "지역별 관광지 개수", example = "217")
    @Column(name = "area_count")
    private int areaCount;



}
