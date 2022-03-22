package com.ssafy.tourist.global.auth;

import com.ssafy.tourist.domain.user.db.entity.User;
import com.ssafy.tourist.domain.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;

/**
 * 현재 액세스 토큰으로 부터 인증된 유저의 상세정보(활성화 여부, 만료, 롤 등) 관련 서비스 정의.
 */
@Component
public class SsafyUserDetailService implements UserDetailsService {
	@Autowired
	UserService userService;

    @Override
    public UserDetails loadUserByUsername(String userEmail) throws UsernameNotFoundException {
		User user = userService.findByEmail(userEmail);
    		if(user != null) {
    			SsafyUserDetails ssafyuserDetails = new SsafyUserDetails(user);
    			return ssafyuserDetails;
    		}
    		return null;
    }
}
