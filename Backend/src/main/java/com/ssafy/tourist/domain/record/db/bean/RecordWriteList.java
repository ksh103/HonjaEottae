package com.ssafy.tourist.domain.record.db.bean;


import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class RecordWriteList {
    private int recordId;
    private int courseId;
    private int touristId;
    private double touristLat;
    private double touristLng;

    private String recordContent;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss", shape = JsonFormat.Shape.STRING)
    private LocalDateTime recordRegDt;

    private int fileId;
}
