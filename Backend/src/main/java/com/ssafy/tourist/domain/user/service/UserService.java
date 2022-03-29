package com.ssafy.tourist.domain.user.service; //비즈니스 로직 처리를 위한 서비스

import com.ssafy.tourist.domain.user.db.bean.VisitCourseName;
import com.ssafy.tourist.domain.user.request.UserLoginPostReq;
import com.ssafy.tourist.domain.user.request.UserModifyPutReq;
import com.ssafy.tourist.domain.user.request.UserRegisterPostReq;
import com.ssafy.tourist.domain.user.response.UserLoginPostRes;
import com.ssafy.tourist.domain.user.db.entity.User;

import java.io.IOException;
import java.net.URL;
import java.util.List;

/**
 *	유저 관련 비즈니스 로직 처리를 위한 서비스 인터페이스 정의.
 */
public interface UserService {
	User findByEmail(String userEmail);
	User createUser(UserRegisterPostReq userRegisterInfo);
	User updateUser(UserModifyPutReq userModifyPutReq);
	List<VisitCourseName> visitCourseName(int userId);
}
