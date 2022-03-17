package com.ssafy.tourist.domain.course.service;

import com.ssafy.tourist.domain.course.db.entity.Bookmark;

public interface CourseService {
    Bookmark bookmarkRegisterByUser(int courseId, int userId);
    int bookmarkRemoveByUser(int courseId, int userId);
}
