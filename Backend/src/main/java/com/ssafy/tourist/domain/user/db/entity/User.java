package com.ssafy.tourist.domain.user.db.entity;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name = "user")
@ApiModel(value = "User", description = "회원 정보")
public class User {
    @ApiModelProperty(value = "회원 구분 번호", example = "1")
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private int userId;

    @ApiModelProperty(value = "여행 취향 테스트 결과 구분 번호", required = true, example = "1")
    @Column(name = "tour_test_id")
    private int tourTestId;

    @ApiModelProperty(value = "회원 닉네임", required = true, example = "싸피짱")
    @Column(name = "user_nick")
    private String userNick;

    @ApiModelProperty(value = "회원 이메일", required = true, example = "ssafy@kakao.com")
    @Column(name = "user_email")
    private String userEmail;

    @ApiModelProperty(value = "회원 성별", required = true, example = "여/남")
    @Column(name = "user_gender")
    private String userGender;

    @ApiModelProperty(value = "로그인 여부", required = true, example = "1")
    @Column(name = "is_login")
    private boolean isLogin;
}
