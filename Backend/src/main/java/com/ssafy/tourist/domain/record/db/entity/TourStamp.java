package com.ssafy.tourist.domain.record.db.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@IdClass(TourStampID.class)
@Table(name = "stamp")
@ApiModel(value = "TourStamp", description = "관광지 방문 정보")
public class TourStamp {

    @ApiModelProperty(value = "코스 구분 번호", example = "1")
    @Id
    @Column(name = "course_id")
    private int courseId;

    @ApiModelProperty(value = "코스에 대한 관광지 구분 번호", example = "1")
    @Id
    @Column(name = "course_data_id")
    private int courseDataId;

    @ApiModelProperty(value = "회원 구분 번호", example = "1")
    @Id
    @Column(name = "user_id")
    private int userId;

    @ApiModelProperty(value = "관광지 방문 여부", example = "true")
    @Id
    @Column(name = "is_stamp")
    private int isStamp;
    
}
