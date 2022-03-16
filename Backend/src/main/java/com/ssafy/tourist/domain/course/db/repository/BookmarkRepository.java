package com.ssafy.tourist.domain.course.db.repository;

import com.ssafy.tourist.domain.course.db.entity.Bookmark;
import com.ssafy.tourist.domain.course.db.entity.BookmarkID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookmarkRepository extends JpaRepository<Bookmark, BookmarkID> {
}
