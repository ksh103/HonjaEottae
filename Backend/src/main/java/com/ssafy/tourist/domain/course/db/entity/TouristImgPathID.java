package com.ssafy.tourist.domain.course.db.entity;

import io.swagger.annotations.ApiModelProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TouristImgPathID implements Serializable {
    @Column(name = "file_id")
    private int fileId;

    @Column(name = "tourist_id")
    private int touristId;
}
