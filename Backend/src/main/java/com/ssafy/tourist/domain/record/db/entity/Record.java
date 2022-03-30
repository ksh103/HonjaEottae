package com.ssafy.tourist.domain.record.db.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.ssafy.tourist.domain.course.db.entity.Tourist;
import com.ssafy.tourist.domain.course.db.entity.TouristImgPath;
import com.ssafy.tourist.domain.user.db.entity.User;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "record")
@ApiModel(value = "Record", description = "여행 레코드(일기) 정보")
public class Record {
    @ApiModelProperty(value = "여행 레코드(일기) 구분 번호", example = "1")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "record_id")
    private int recordId;

    @ApiModelProperty(value = "코스 구분 번호", example = "1")
    @Column(name = "course_id")
    private int courseId;

    @ApiModelProperty(value = "회원 코드", required = true, example = "3")
    @Column(name = "user_id")
    private int userId;

    @ApiModelProperty(value = "여행 레코드(일기) 내용", required = true, example = "재밌다!")
    @Column(name = "record_content")
    private String recordContent;

    @ApiModelProperty(value = "팬미팅 등록 날짜 및 시간", required = true, example = "2022-03-17 15:00:00")
    @Column(name = "record_reg_dt")
    @CreationTimestamp
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", shape = JsonFormat.Shape.STRING)
    private LocalDateTime recordRegDt;

    @OneToOne
    @JoinColumn(name = "user_id", updatable = false, insertable = false)
    private User user;

    @OneToOne
    @JoinColumn(name = "record_id", updatable = false, insertable = false)
    private RecordImgPath recordImgPath;
}
