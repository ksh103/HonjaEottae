package com.ssafy.tourist.domain.user.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

/**
 * 유저 회원가입 API ([POST] /api/v1/users) 요청에 필요한 리퀘스트 바디 정의.
 */
@Getter
@Setter
@ApiModel("UserRegisterPostReq")
public class UserRegisterPostReq {
	@ApiModelProperty(name = "회원 Email", example = "ssafy@ssafy.com")
	String userEmail;
	@ApiModelProperty(name = "회원 Password", example = "1234")
	String userPassword;
	@ApiModelProperty(name = "회원 Name", example = "김싸피")
	String userName;
}
