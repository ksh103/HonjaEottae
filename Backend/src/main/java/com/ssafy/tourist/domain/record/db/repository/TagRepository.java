package com.ssafy.tourist.domain.record.db.repository;

import com.ssafy.tourist.domain.record.db.entity.Tag;
import com.ssafy.tourist.domain.record.db.entity.TagID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TagRepository extends JpaRepository<Tag, TagID> {

    @Query("select c.code, c.codeName, t.tagId, t.tagName from Tag t left join TagCode c on t.code = c.code order by c.code asc")
    List<String> findTagList ();
}
