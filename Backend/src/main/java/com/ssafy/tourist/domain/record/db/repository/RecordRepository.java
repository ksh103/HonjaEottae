package com.ssafy.tourist.domain.record.db.repository;

import com.ssafy.tourist.domain.record.db.entity.Record;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecordRepository extends JpaRepository<Record, Integer> {
}
