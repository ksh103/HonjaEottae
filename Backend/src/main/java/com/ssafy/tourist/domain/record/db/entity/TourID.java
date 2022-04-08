package com.ssafy.tourist.domain.record.db.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TourID implements Serializable {
    @Column(name = "user_id")
    int userId;

    @Column(name = "course_id")
    int courseId;
}
