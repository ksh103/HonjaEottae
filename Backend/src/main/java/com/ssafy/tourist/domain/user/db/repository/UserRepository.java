package com.ssafy.tourist.domain.user.db.repository;

import com.ssafy.tourist.domain.user.db.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

    @Modifying(clearAutomatically = true)
    @Transactional
    @Query(value = "update User u set u.tourTestId = :tourTestId where u.userId = :userId")
    int tourTestResultByUserId(int userId, int tourTestId); // update/delete 문은 return type이 int/Integer이어야함.
}
