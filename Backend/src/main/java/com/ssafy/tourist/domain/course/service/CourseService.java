package com.ssafy.tourist.domain.course.service;

import com.ssafy.tourist.domain.course.db.entity.Bookmark;
import com.ssafy.tourist.domain.course.db.entity.Course;
import com.ssafy.tourist.domain.course.request.BookmarkRegisterPostReq;

import java.util.List;

public interface CourseService {
    Bookmark bookmarkRegisterByUser(BookmarkRegisterPostReq bookmarkRegisterPostReq);
    int bookmarkRemoveByUser(int userId, int courseId);
    List<Course> bookmarkCourse(int userId);
}
