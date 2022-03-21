package com.ssafy.tourist.domain.record.db.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class RecordTagID implements Serializable {
    @Column(name = "record_id")
    int recordId;

    @Column(name = "course_id")
    int courseId;

    @Column(name = "code")
    int code;

    @Column(name = "tag_id")
    int tagId;
}
