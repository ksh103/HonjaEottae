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

import java.time.LocalDate;
import java.util.Arrays;
import java.util.Collections;
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

    private boolean[] temp = new boolean[6];

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
    public List<DateAnalysisDetail> dateAnalysisDetail(int userId){
        List<DateAnalysisDetail> list = userRepositorySpp.dateAnalysisDetailByUserId(userId);
        Arrays.fill(temp,false);

        if(list.size() != 6){
            for(int j = 0;j < list.size();j++ ) {
                for (int i = 0; i < 6; i++) {
                    String rangeDate = LocalDate.now().minusMonths(i).toString().replace("-", "").substring(0, 6);
                    int newRangeDate = Integer.parseInt(rangeDate);
                    if(!temp[i] && list.get(j).getYearAndMonth() == newRangeDate){
                        temp[i] = true;
                    }
                }
            }

            for (int i = 0; i < 6; i++) {
                if(!temp[i]){
                    String rangeDate = LocalDate.now().minusMonths(i).toString().replace("-", "").substring(0, 6);
                    int newRangeDate = Integer.parseInt(rangeDate);
                    list.add(new DateAnalysisDetail(newRangeDate,0L));
                    temp[i] = true;

                }
            }

        }
        Collections.sort(list);

        return  list;
    }
}
