package com.ssafy.tourist.domain.user.controller;

import com.ssafy.tourist.domain.user.db.entity.User;
import com.ssafy.tourist.domain.user.request.UserModifyPutReq;
import com.ssafy.tourist.domain.user.request.UserRegisterPostReq;
import com.ssafy.tourist.domain.user.response.UserLoginPostRes;
import com.ssafy.tourist.domain.user.request.UserLoginPostReq;
import com.ssafy.tourist.domain.user.service.UserService;
import com.ssafy.tourist.global.model.response.BaseResponseBody;
import com.ssafy.tourist.global.util.JwtTokenUtil;
import io.swagger.annotations.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.io.IOException;
import java.util.List;

@Api("유저 API")
@Slf4j
@Controller
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    UserService userService;

    @Autowired
    PasswordEncoder passwordEncoder;

    @ApiOperation(value = "로그인", notes = "<strong>이름과 패스워드</strong>를 통해 로그인 한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공", response = UserLoginPostRes.class),
            @ApiResponse(code = 401, message = "인증 실패", response = BaseResponseBody.class),
            @ApiResponse(code = 404, message = "사용자 없음", response = BaseResponseBody.class),
            @ApiResponse(code = 500, message = "서버 오류", response = BaseResponseBody.class)
    })
    @PostMapping("/login")
    public ResponseEntity<UserLoginPostRes> login(@RequestBody @ApiParam(value="로그인 정보", required = true) UserLoginPostReq loginInfo) {
        String user_email = loginInfo.getUserEmail();
        String user_password = loginInfo.getUserPassword();
        User user = userService.findByEmail(user_email);
        if(passwordEncoder.matches(user_password, user.getUserPassword())){
            //패스워드가 맞는 경우 , 로그인 성공
            return ResponseEntity.ok(UserLoginPostRes.of(200, "Success", JwtTokenUtil.getToken(user_email)));
        }
        return ResponseEntity.status(401).body(UserLoginPostRes.of(401, "Invalid Password", null));
    }

    @PostMapping("/signup")
    @ApiOperation(value = "회원 가입", notes = "<strong>email,패스워드,이름</strong>를 통해 회원가입 한다.")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 401, message = "인증 실패"),
            @ApiResponse(code = 404, message = "사용자 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<? extends BaseResponseBody> register(
            @RequestBody @ApiParam(value="회원가입 정보", required = true) UserRegisterPostReq userRegisterInfo) {
        //임의로 리턴된 User 인스턴스. 현재 코드는 회원 가입 성공 여부만 판단하기 때문에 굳이 Insert 된 유저 정보를 응답하지 않음.
        User user = userService.createUser(userRegisterInfo);
        return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
    }

    @PutMapping("/user/modify")
    @ApiOperation(value = "학생 회원 정보 수정", notes = "<strong>회원 Email를 기준</strong>으로 조회 후 다른 정보 수정!!")
    @ApiResponses({
            @ApiResponse(code = 200, message = "성공"),
            @ApiResponse(code = 401, message = "인증 실패"),
            @ApiResponse(code = 404, message = "사용자 없음"),
            @ApiResponse(code = 500, message = "서버 오류")
    })
    public ResponseEntity<? extends BaseResponseBody> modify(
            @RequestBody @ApiParam(value="이름, 성향테스트 결과 변경", required = true) UserModifyPutReq userModifyPutReq) {

        User user1 = userService.findByEmail(userModifyPutReq.getUserEmail());
        boolean check = passwordEncoder.matches(userModifyPutReq.getUserPassword(), user1.getUserPassword());
        if(!check) return ResponseEntity.status(404).body(BaseResponseBody.of(404,"False"));
        else {
            User user = userService.updateUser(userModifyPutReq);
            return ResponseEntity.status(200).body(BaseResponseBody.of(200, "Success"));
        }
    }
}
