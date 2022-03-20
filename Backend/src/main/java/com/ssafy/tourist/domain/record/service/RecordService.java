package com.ssafy.tourist.domain.record.service;

import com.ssafy.tourist.domain.record.db.entity.Record;
import com.ssafy.tourist.domain.record.request.RecordModifyPostReq;
import com.ssafy.tourist.domain.record.request.RecordRegisterPostReq;

import java.util.List;

public interface RecordService {
    int recordRegisterByUser(RecordRegisterPostReq recordRegisterPostReq);
    int recordModifyByUser(RecordModifyPostReq recordModifyPostReq);
    List<Record> recordWriteListByUser(int userId, int courseId);
}
