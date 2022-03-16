package com.ssafy.tourist.domain.tourtest.db.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "tour_test")
@ApiModel(value = "TourTest", description = "여행 취향 테스트 정보")
public class TourTest {
    @ApiModelProperty(value = "여행 취향 테스트 결과 구분 번호", example = "1")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "tour_test_id")
    private int tourTestId;

    @ApiModelProperty(value = "여행 취향 테스트 결과 명", required = true, example = "열정적이고 역동적인 에너지가 가득한 청춘여행 스타일")
    @Column(name = "tour_test_name")
    private String tourTestName;

    @ApiModelProperty(value = "여행 취향 테스트 결과 명", required = true, example = "0")
    @Column(name = "tour_test_result")
    private int tourTestResult;
}
