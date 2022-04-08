package com.ssafy.tourist.domain.course.db.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class BookmarkID implements Serializable {
    @Column(name = "user_id")
    private int userId;

    @Column(name = "course_id")
    private int courseId;
}
