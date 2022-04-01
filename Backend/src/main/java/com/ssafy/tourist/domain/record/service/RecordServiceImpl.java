package com.ssafy.tourist.domain.record.service;

import com.ssafy.tourist.domain.course.db.entity.TouristImgPath;
import com.ssafy.tourist.domain.course.db.repository.CourseRepository;
import com.ssafy.tourist.domain.record.controller.RecordController;
import com.ssafy.tourist.domain.record.db.bean.RecordWriteList;
import com.ssafy.tourist.domain.record.db.entity.Record;
import com.ssafy.tourist.domain.record.db.entity.RecordImgPath;
import com.ssafy.tourist.domain.record.db.repository.*;
import com.ssafy.tourist.domain.record.request.RecordModifyPostReq;
import com.ssafy.tourist.domain.record.request.RecordRegisterPostReq;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.io.FilenameUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import javax.swing.filechooser.FileSystemView;
import java.io.File;
import java.io.IOException;
import java.nio.file.FileSystem;
import java.util.List;
import java.util.UUID;

@Slf4j
@Service
public class RecordServiceImpl implements RecordService {

    @Autowired
    RecordRepository recordRepository;

    @Autowired
    TourRepository tourRepository;

    @Autowired
    TourStampRepository tourStampRepository;

    @Autowired
    RecordImgPathRepository recordImgPathRepository;

    @Autowired
    RecordRepositorySpp recordRepositorySpp;


    private static final int SUCCESS = 1;
    private static final int FAIL = -1;


    @Value("${app.fileupload.uploadDir}")
    private String uploadFolder;

    @Value("${app.fileupload.uploadPath}")
    private String uploadPath;


    @Override
    public int recordRegisterByUser(RecordRegisterPostReq recordRegisterPostReq, MultipartHttpServletRequest request) throws IOException {

        int userId = recordRegisterPostReq.getUserId();
        int courseId = recordRegisterPostReq.getCourseId();
        String contents = recordRegisterPostReq.getRecordContent();

        Record record = new Record();

        // 코스 시작 이력 여부 확인, 스탬프가 하나라도 찍혀 있을 때 작성 가능 하게 설정 --> 여행 레코드 작성 활성화
        if (tourRepository.existsTourByUserIdAndCourseId(userId, courseId) && tourStampRepository.isStampByUserIdandCourseId(userId, courseId) > 0) {
            record.setCourseId(courseId);
            record.setUserId(userId);
            record.setRecordContent(contents);

            recordRepository.save(record);

            /*******  추후 이미지 파일 업로드 코드 작성 ********/

            List<MultipartFile> fileList = request.getFiles("file");
            String rootPath = FileSystemView.getFileSystemView().getHomeDirectory().toString();
            File uploadDir = new File(uploadPath + File.separator + uploadFolder);

            // recordimages 폴더 존재하지 않으면 생성
            if (!uploadDir.exists()) uploadDir.mkdir();

            for (MultipartFile part : fileList) {

                int recordId = record.getRecordId();

                String fileName = part.getOriginalFilename();

                // 보안을 위해 이미지 파일명 난수로 변환
                UUID uuid = UUID.randomUUID();

                // 파일 확장자 추출
                String extension = FilenameUtils.getExtension(fileName);

                // 난수로 지정한 파일명 + 확장자
                String savingFileName = uuid + "." + extension;

                File destFile = new File(uploadPath + File.separator, uploadFolder + File.separator + savingFileName);

                // 파일 저장
                part.transferTo(destFile);


                // 파일 정보 DB에 저장
                RecordImgPath recordImgPath = new RecordImgPath();
                recordImgPath.setRecordId(recordId);
                recordImgPath.setCourseId(courseId);
                recordImgPath.setFileName(fileName);
                recordImgPath.setFileSize(part.getSize());
                recordImgPath.setFileContent(part.getContentType());

                String recordFileUrl = "/" + uploadFolder + "/" + savingFileName;
                recordImgPath.setFileUrl(recordFileUrl);

                recordImgPathRepository.save(recordImgPath);
                
                return SUCCESS;
            }
        }
        return FAIL;
    }

    @Override
    public int recordModifyByUser(RecordModifyPostReq recordModifyPostReq) {
        // 여행 레코드가 존재하면 수정. 존재하지 않으면 -1 반환
        if(recordRepository.findById(recordModifyPostReq.getRecordId()).isPresent()) {
            int recordId = recordRepository.findById(recordModifyPostReq.getRecordId()).get().getRecordId();
            String recordContent = recordModifyPostReq.getRecordContent();

            recordRepository.recordModifyByUser(recordId, recordContent);

            return SUCCESS;
        }
        return FAIL;
    }

    @Override
    public List<RecordWriteList> recordWriteListByUser(int userId) {return recordRepositorySpp.findRecordWriteList(userId);}

    @Override
    public int recordIdPostRes(int courseId, int userId) {
        return recordRepository.findRecordId(courseId, userId);
    }


    @Override
    public String getRecordImgPath(int fileId, int recordId, int courseId) {
        RecordImgPath recordImgPath = recordImgPathRepository.findRecordImgPathByFileIdAndRecordIdAndCourseId(fileId, recordId, courseId);
        String path = uploadPath + recordImgPath.getFileUrl();

        System.out.println(path);
        return path;
    }
}
