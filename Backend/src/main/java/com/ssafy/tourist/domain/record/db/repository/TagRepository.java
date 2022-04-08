package com.ssafy.tourist.domain.record.db.repository;

import com.ssafy.tourist.domain.record.db.entity.Tag;
import com.ssafy.tourist.domain.record.db.entity.TagID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TagRepository extends JpaRepository<Tag, TagID> {
}
