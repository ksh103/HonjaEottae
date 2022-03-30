package com.ssafy.tourist.domain.record.service;

import com.ssafy.tourist.domain.record.db.bean.RecordWriteList;
import com.ssafy.tourist.domain.record.db.entity.Record;
import com.ssafy.tourist.domain.record.request.RecordModifyPostReq;
import com.ssafy.tourist.domain.record.request.RecordRegisterPostReq;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import java.io.IOException;
import java.util.List;

public interface RecordService {
    int recordRegisterByUser(RecordRegisterPostReq recordRegisterPostReq, MultipartHttpServletRequest request) throws IOException;
    int recordModifyByUser(RecordModifyPostReq recordModifyPostReq);
    List<RecordWriteList> recordWriteListByUser(int userId, int courseId);

    String getRecordImgPath(int fileId, int recordId, int courseId);
}
