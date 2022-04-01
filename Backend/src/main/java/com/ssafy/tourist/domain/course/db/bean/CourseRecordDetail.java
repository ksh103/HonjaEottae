package com.ssafy.tourist.domain.course.db.bean;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class CourseRecordDetail {
    private int courseId;

    private int recordId;
    private String recordContent;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", shape = JsonFormat.Shape.STRING)
    private LocalDateTime recordRegDt;

    private int fileId;
}
