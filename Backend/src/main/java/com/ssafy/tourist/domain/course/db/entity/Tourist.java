package com.ssafy.tourist.domain.course.db.entity;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name = "tourist")
@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY)
@ApiModel(value = "Tourist", description = "관광지 주요 정보")
public class Tourist {
    @ApiModelProperty(value = "관광지 구분 번호", example = "1")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tourist_id")
    private int touristId;

    @ApiModelProperty(value = "관광지 명", required = true, example = "정동진조각공원")
    @Column(name = "tourist_name")
    private String touristName;

    @ApiModelProperty(value = "관광지 주소", required = true, example = "강원 강릉시 강동면 정동진리 50-9")
    @Column(name = "tourist_address")
    private String touristAddress;

    @ApiModelProperty(value = "관광지 위도", required = true, example = "37.68433763")
    @Column(name = "tourist_lat")
    private double touristLat;

    @ApiModelProperty(value = "관광지 경도", required = true, example = "129.041503")
    @Column(name = "tourist_lng")
    private double touristLng;

    @ApiModelProperty(value = "관광지 개요", required = true, example = "정동진역에서 남쪽으로 700m 떨어진 썬크루즈 리조트 내에 위치한 사설 공원이다. 동해는 물론 해수욕장과 기차역과 해안도로를 한눈에 조망할 수 있다. 최옥영과 원인종 김희경 등 조각가 10인의 작품 20여 점이 전시되어 있다. 2000년 6월에 개장한 장승공원에는 안동 하회마을의 조각가 김종흥이 제작한 통일 대장군 해돋이 대장군 득남 여장군 등 230기의 장승이 있다.  타이타닉 등 포토존이 잘 조성돼 있어서 정동진을 찾는 연인과 가족 단위의 관람객이 많다. 인근에는 드라마 영상관과 모래시계공원 등이 있다.")
    @Column(name = "tourist_summary")
    private String touristSummary;
}
