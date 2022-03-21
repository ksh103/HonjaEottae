package com.ssafy.tourist.domain.record.service;

import com.ssafy.tourist.domain.course.db.entity.CourseData;
import com.ssafy.tourist.domain.course.db.repository.CourseDataRepository;
import com.ssafy.tourist.domain.record.db.entity.*;
import com.ssafy.tourist.domain.record.db.repository.*;
import com.ssafy.tourist.domain.record.request.TagRegisterPostReq;
import com.ssafy.tourist.domain.record.request.TourEndPostReq;
import com.ssafy.tourist.domain.record.request.TourStartPostReq;
import com.ssafy.tourist.domain.record.request.TouristVisitPostReq;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class TourServiceImpl implements TourService {

    @Autowired
    TourRepository tourRepository;

    @Autowired
    TourStampRepository tourStampRepository;

    @Autowired
    CourseDataRepository courseDataRepository;

    @Autowired
    RecordTagRepository recordTagRepository;

    @Autowired
    TagRepository tagRepository;

    @Autowired
    TourRepositorySpp tourRepositorySpp;

    private static final int SUCCESS = 1;
    private static final int FAIL = -1;

    @Override
    public int courseStartByUser(TourStartPostReq tourStartPostReq) {
        // 코스 시작
        Tour tour = new Tour();

        tour.setUserId(tourStartPostReq.getUserId());
        tour.setCourseId(tourStartPostReq.getCourseId());
        tour.setTourStart(LocalDateTime.now());
        tour.setStart(true);

        tourRepository.save(tour); // 코스 시작 정보 넣기

        // ** 코스 시작 이후 관광지 방문 db도 처리
        TourStamp tourStamp = new TourStamp();

        // 코스 번호 받아서 코스 안에 관광지 개수 카운트 -> 관광지 개수만큼 stamp에 넣기
        int touristCount = courseDataRepository.courseDataCount(tourStartPostReq.getCourseId());

        for (int i = 1; i <= touristCount; i++) {
            tourStamp.setCourseId(tourStartPostReq.getCourseId());
            tourStamp.setCourseDataId(i);
            tourStamp.setUserId(tourStartPostReq.getUserId());

            tourStampRepository.save(tourStamp);
        }

        return SUCCESS;
    }

    @Override
    public int courseEndByUser(TourEndPostReq tourEndPostReq) {
        TourID tourID = new TourID();
        tourID.setUserId(tourEndPostReq.getUserId());
        tourID.setCourseId(tourEndPostReq.getCourseId());

        if(tourRepository.findById(tourID).isPresent()) {
            return tourRepository.tourEndByUser(tourEndPostReq.getUserId(), tourEndPostReq.getCourseId());
        } else return FAIL;
    }

    @Override
    public int touristVisitByUser(TouristVisitPostReq touristVisitPostReq) {
        TourStampID tourStampID = new TourStampID();
        tourStampID.setUserId(touristVisitPostReq.getUserId());
        tourStampID.setCourseId(touristVisitPostReq.getCourseId());
        tourStampID.setCourseDataId(touristVisitPostReq.getCourseDataId());

        if(tourStampRepository.findById(tourStampID).isPresent()) {
            return tourStampRepository.touristVisitByUser(touristVisitPostReq.getUserId(), touristVisitPostReq.getCourseId(), touristVisitPostReq.getCourseDataId());
        }
        return FAIL;
    }

    @Override
    public List<CourseData> touristNameVisitByUser(int userId, int courseId) {
        return tourRepositorySpp.findVisitTouristName(userId, courseId);
    }

    @Override
    public int tagRegisterByUser(TagRegisterPostReq tagRegisterPostReq) {
        RecordTag recordTag = new RecordTag();

        // map<key, value> 사용해서 tag 받아오기
        for (int item : tagRegisterPostReq.getTag().keySet()) {
            recordTag.setRecordId(tagRegisterPostReq.getRecordId());
            recordTag.setCourseId(tagRegisterPostReq.getCourseId());
            recordTag.setSelect(true);

            recordTag.setCode(item);
            recordTag.setTagId(tagRegisterPostReq.getTag().get(item));

            recordTagRepository.save(recordTag);
        }
        return SUCCESS;
    }

    @Override
    public List<String> tagList() {
        return tagRepository.findTagList();
    }
}
