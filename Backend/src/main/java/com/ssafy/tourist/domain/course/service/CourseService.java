package com.ssafy.tourist.domain.course.service;

import com.ssafy.tourist.domain.course.db.entity.Bookmark;
import com.ssafy.tourist.domain.course.request.BookmarkRegisterPostReq;

public interface CourseService {
    Bookmark bookmarkRegisterByUser(BookmarkRegisterPostReq bookmarkRegisterPostReq);
    int bookmarkRemoveByUser(int courseId, int userId);
}
