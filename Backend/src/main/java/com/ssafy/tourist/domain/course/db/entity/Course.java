package com.ssafy.tourist.domain.course.db.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "course")
@ApiModel(value = "Course", description = "코스 주요 정보")
public class Course {
    @ApiModelProperty(value = "코스 구분 번호", example = "1")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "course_id")
    private int courseId;

    @ApiModelProperty(value = "회원 코드", required = true, example = "3")
    @Column(name = "user_id")
    private int userId;

    @ApiModelProperty(value = "코스 명", required = true, example = "3")
    @Column(name = "course_name")
    private String courseName;

    @ApiModelProperty(value = "코스 개요", required = true, example = "3")
    @Column(name = "course_content")
    private String courseContent;

    @ApiModelProperty(value = "코스 총 거리", required = true, example = "3")
    @Column(name = "course_distance")
    private String courseDistance;

    @ApiModelProperty(value = "코스 총 소요일", required = true, example = "3")
    @Column(name = "course_days")
    private String courseDays;

    @ApiModelProperty(value = "코스 조회수", required = true, example = "3")
    @Column(name = "course_hits")
    private int courseHits;

    @ApiModelProperty(value = "코스 사용자 등록 여부 ", required = true, example = "3")
    @Column(name = "is_register")
    private boolean isRegister;

}
