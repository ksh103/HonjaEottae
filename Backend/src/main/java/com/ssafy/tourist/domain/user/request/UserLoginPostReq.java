package com.ssafy.tourist.domain.user.request;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@ApiModel("UserLoginPostReq")
public class UserLoginPostReq {
    @ApiModelProperty(name = "회원 Email", example = "ssafy@ssafy.com")
    String userEmail;
    @ApiModelProperty(name = "회원 Password", example = "1234")
    String userPassword;
}
