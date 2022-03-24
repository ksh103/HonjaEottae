package com.ssafy.tourist.domain.course.db.entity;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;


@Entity
@Getter
@Setter
@IdClass(CourseDataID.class)
@Table(name = "course_data")
@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
@ApiModel(value = "CourseData", description = "코스에 등록된 관광지 정보")
public class CourseData {
    @ApiModelProperty(value = "코스에 등록된 관광지 순차 번호", example = "1")
    @Id
    @Column(name = "course_data_id")
    private int courseDataId;

    @ApiModelProperty(value = "코스 구분 코드", required = true, example = "3")
    @Id
    @Column(name = "course_id")
    private int courseId;

    @ApiModelProperty(value = "관광지 구분 코드", required = true, example = "3")
    @Column(name = "tourist_id")
    private int touristId;

    @ManyToOne
    @JoinColumn(name = "course_id", updatable = false, insertable = false)
    private Course course;

    @OneToOne
    @JoinColumn(name = "tourist_id", updatable = false, insertable = false)
    private Tourist tourist;

}
