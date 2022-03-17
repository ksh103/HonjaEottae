package com.ssafy.tourist.domain.record.service;

import com.ssafy.tourist.domain.course.db.repository.CourseRepository;
import com.ssafy.tourist.domain.record.db.entity.Record;
import com.ssafy.tourist.domain.record.db.repository.RecordRepository;
import com.ssafy.tourist.domain.record.db.repository.TourRepository;
import com.ssafy.tourist.domain.record.request.RecordRegisterPostReq;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class RecordServiceImpl implements RecordService {

    @Autowired
    RecordRepository recordRepository;

    @Autowired
    TourRepository tourRepository;

    private static final int SUCCESS = 1;
    private static final int FAIL = -1;

    @Override
    public int recordRegisterByUser(RecordRegisterPostReq recordRegisterPostReq) {

        int userId = recordRegisterPostReq.getUserId();
        int courseId = recordRegisterPostReq.getCourseId();
        String contents = recordRegisterPostReq.getRecordContent();

        Record record = new Record();

        // 코스 완주 이력이 있을 때, 여행 레코드 작성 가능
        if(tourRepository.existsTourByUserIdAndCourseId(userId, courseId)) {
            record.setCourseId(courseId);
            record.setUserId(userId);
            record.setRecordContent(contents);

            recordRepository.save(record);

            /*******  추후 이미지 파일 업로드 코드 작성 ********/

            return SUCCESS;
        }else return FAIL;
    }
}
