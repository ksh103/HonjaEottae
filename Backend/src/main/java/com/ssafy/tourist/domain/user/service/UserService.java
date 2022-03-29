package com.ssafy.tourist.domain.user.service; //비즈니스 로직 처리를 위한 서비스

import com.ssafy.tourist.domain.user.db.bean.AreaAnalysisDetail;
import com.ssafy.tourist.domain.user.db.bean.CourseNameVisitDetail;
import com.ssafy.tourist.domain.user.db.bean.DateAnalysisDetail;
import com.ssafy.tourist.domain.user.request.UserModifyPutReq;
import com.ssafy.tourist.domain.user.request.UserRegisterPostReq;
import com.ssafy.tourist.domain.user.db.entity.User;

import java.util.List;

/**
 *	유저 관련 비즈니스 로직 처리를 위한 서비스 인터페이스 정의.
 */
public interface UserService {
	User findByEmail(String userEmail);
	User createUser(UserRegisterPostReq userRegisterInfo);
	User updateUser(UserModifyPutReq userModifyPutReq);
	List<CourseNameVisitDetail> courseNameVisitDetail(int userId);
	List<AreaAnalysisDetail> areaAnalysisDetail(int userId);
	List<DateAnalysisDetail> dateAnalysisDetail(int userId);
}
