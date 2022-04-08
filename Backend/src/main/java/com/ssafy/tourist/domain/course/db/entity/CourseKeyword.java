package com.ssafy.tourist.domain.course.db.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "course_keyword")
@ApiModel(value = "CourseKeyword", description = "키워드별 코스 정보")
public class CourseKeyword {
    @ApiModelProperty(value = "키워드 구분 번호", example = "1")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "keyword_id")
    private int keywordId;

    @ApiModelProperty(value = "키워드 명", example = "바다")
    @Column(name = "keyword_name")
    private String keywordName;

    @ApiModelProperty(value = "코스번호", example = "1")
    @Column(name = "course_id")
    private int courseId;


}
