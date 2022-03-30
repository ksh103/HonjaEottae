package com.ssafy.tourist.domain.record.db.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.time.LocalDateTime;

@Entity
@Getter
@Setter
@Table(name = "record_img_path")
@ApiModel(value = "RecordImgPath", description = "여행 레코드(일기) 이미지 파일 정보")
public class RecordImgPath {
    @ApiModelProperty(value = "여행 레코드(일기) 이미지 파일 구분 번호", example = "1")
    @Id
    @Column(name = "file_id")
    private int fileId;


    @ApiModelProperty(value = "여행 레코드(일기) 구분 번호", required = true, example = "2")
    @Column(name = "record_id")
    private int recordId;


    @ApiModelProperty(value = "코스 구분 번호", required = true, example = "2")
    @Column(name = "course_id")
    private int courseId;


    @ApiModelProperty(value = "이미지 파일 이름", required = true, example = "2_2.jpg")
    @Column(name = "file_name")
    private String fileName;


    @ApiModelProperty(value = "이미지 파일 크기", required = true, example = "3423")
    @Column(name = "file_size")
    private Long fileSize;

    
    @ApiModelProperty(value = "이미지 파일 정보", required = true, example = "images/jpeg")
    @Column(name = "file_content")
    private String fileContent;


    @ApiModelProperty(value = "이미지 파일 경로", required = true, example = "/recordimages/1.jpg")
    @Column(name = "file_url")
    private String fileUrl;


    @ApiModelProperty(value = "이미지 등록 날짜 및 시간", required = true, example = "2022-03-17 15:00:00")
    @Column(name = "file_reg_dt")
    @CreationTimestamp
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", shape = JsonFormat.Shape.STRING)
    private LocalDateTime fileRegDt;


}
