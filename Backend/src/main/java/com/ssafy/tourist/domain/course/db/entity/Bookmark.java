package com.ssafy.tourist.domain.course.db.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@IdClass(BookmarkID.class)
@Table(name = "bookmark")
@ApiModel(value = "Bookmark", description = "코스 북마크(좋아요) 정보")
public class Bookmark {
    @ApiModelProperty(value = "코스 구분 번호", example = "1")
    @Id
    @Column(name = "course_id")
    private int courseId;

    @ApiModelProperty(value = "회원 구분 번호", example = "1")
    @Id
    @Column(name = "user_id")
    private int userId;
}
