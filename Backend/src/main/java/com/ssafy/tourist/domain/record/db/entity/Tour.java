package com.ssafy.tourist.domain.record.db.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.ssafy.tourist.domain.course.db.entity.CourseDataID;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@IdClass(TourID.class)
@Table(name = "tour")
@ApiModel(value = "Tour", description = "코스 시작-종료 정보")
public class Tour {

    @ApiModelProperty(value = "코스 구분 번호", example = "1")
    @Id
    @Column(name = "course_id")
    private int courseId;

    @ApiModelProperty(value = "회원 구분 번호", example = "1")
    @Id
    @Column(name = "user_id")
    private int userId;

    @Column(name = "tour_start")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", shape = JsonFormat.Shape.STRING)
    @ApiModelProperty(value = "관광지 방문 시작 날짜 및 시간", required = true, example = "2022-03-17 13:00:00")
    private LocalDateTime tourStart;

    @Column(name = "tour_end")
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", shape = JsonFormat.Shape.STRING)
    @ApiModelProperty(value = "관광지 방문 종료 날짜 및 시간", required = true, example = "2022-03-17 19:00:00")
    private LocalDateTime tourEnd;

    @ApiModelProperty(value = "완주 여부", example = "1")
    @Id
    @Column(name = "is_goal")
    private boolean isGoal;
}
