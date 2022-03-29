package com.ssafy.tourist.domain.course.db.entity;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import com.fasterxml.jackson.annotation.JsonFormat;
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
@IdClass(TouristImgPathID.class)
@Table(name = "tourist_img_path")
@ApiModel(value = "TouristImgPath", description = "관광지 주요 정보")
public class TouristImgPath {
    @ApiModelProperty(value = "관광지 이미지 파일 구분 번호", example = "1")
    @Id
    @Column(name = "file_id")
    private int fileId;

    @ApiModelProperty(value = "관광지 구분 번호", required = true, example = "2")
    @Id
    @Column(name = "tourist_id")
    private int touristId;

    @ApiModelProperty(value = "이미지 파일 이름", required = true, example = "2_2.jpg")
    @Column(name = "file_name")
    private String touristName;

    @ApiModelProperty(value = "이미지 파일 경로", required = true, example = "/tourimages/2_2.jpg")
    @Column(name = "file_url")
    private String fileUrl;

    @ApiModelProperty(value = "이미지 등록 날짜 및 시간", required = true, example = "2022-03-17 15:00:00")
    @Column(name = "file_reg_dt")
    @CreationTimestamp
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", shape = JsonFormat.Shape.STRING)
    private LocalDateTime fileRegDt;
}
