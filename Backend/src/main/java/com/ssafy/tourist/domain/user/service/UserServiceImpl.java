package com.ssafy.tourist.domain.user.service;

import com.ssafy.tourist.domain.user.db.bean.AreaAnalysisDetail;
import com.ssafy.tourist.domain.user.db.bean.CourseNameVisitDetail;
import com.ssafy.tourist.domain.user.db.bean.DateAnalysisDetail;
import com.ssafy.tourist.domain.user.db.entity.User;
import com.ssafy.tourist.domain.user.db.repository.UserRepository;
import com.ssafy.tourist.domain.user.db.repository.UserRepositorySpp;
import com.ssafy.tourist.domain.user.request.UserModifyPutReq;
import com.ssafy.tourist.domain.user.request.UserRegisterPostReq;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("userService")
public class UserServiceImpl implements UserService{
    @Autowired
    UserRepository userRepository;

    @Autowired
    UserRepositorySpp userRepositorySpp;

    @Lazy
    @Autowired
    PasswordEncoder passwordEncoder;

    @Override
    @Cacheable(value = "findByEmail", key="#userEmail")
    public User findByEmail(String userEmail) {
        User user = userRepositorySpp.findByEmail(userEmail);
        return user;
    }

    @Override
    public User createUser(UserRegisterPostReq userRegisterInfo) {
        User user = new User();
        if(findByEmail(userRegisterInfo.getUserEmail())==null){
            user.setUserEmail(userRegisterInfo.getUserEmail());
            user.setUserName(userRegisterInfo.getUserName());
            user.setUserPassword(passwordEncoder.encode(userRegisterInfo.getUserPassword()));
            user.setTourTestId(7);
            return userRepository.save(user);
        }else {
            return null;
        }
    }

    @Override
    public User updateUser(UserModifyPutReq userModifyPutReq) {
        User user = new User();
        user.setUserEmail(userModifyPutReq.getUserEmail());
        user.setUserName(userModifyPutReq.getUserName());
        user.setUserPassword(passwordEncoder.encode(userModifyPutReq.getUserPassword()));
        user.setTourTestId(userModifyPutReq.getTourTestId());
        return userRepository.save(user);
    }

    @Override
    public List<CourseNameVisitDetail> courseNameVisitDetail(int userId){return  userRepositorySpp.courseVisitDetailByUserId(userId);}
    @Override
    public List<AreaAnalysisDetail> areaAnalysisDetail(int userId){ return userRepositorySpp.areaAnalysisDetailByUserId(userId);}

    @Override
    public List<DateAnalysisDetail> dateAnalysisDetail(int userId){return  userRepositorySpp.dateAnalysisDetailByUserId(userId);}

}
