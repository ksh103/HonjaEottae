package com.ssafy.tourist.domain.record.db.bean;


import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class RecordWriteList {
    private int recordId;
    private int userId;
    private int courseId;
    private String recordContent;
    private String recordRegDt;

    private int fileId;
}
