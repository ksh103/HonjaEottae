package com.ssafy.tourist.domain.record.db.repository;

import com.ssafy.tourist.domain.record.db.entity.Record;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface RecordRepository extends JpaRepository<Record, Integer> {

    @Modifying(clearAutomatically = true)
    @Transactional
    @Query("update Record r set r.recordContent = :recordContent where r.recordId = :recordId")
    int recordModifyByUser(int recordId, String recordContent);

    List<Record> findRecordByUserIdAndCourseId(int userId, int courseId);

    @Query("select recordId from Record where courseId = :courseId and userId = :userId")
    int findRecordId(int courseId, int userId);
}
