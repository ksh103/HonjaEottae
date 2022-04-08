package com.ssafy.tourist.domain.course.service;

import com.ssafy.tourist.domain.course.db.bean.TouristSearch;
import com.ssafy.tourist.domain.course.db.entity.Tourist;
import com.ssafy.tourist.domain.course.db.entity.TouristImgPath;
import com.ssafy.tourist.domain.course.db.repository.CourseRepositorySpp;
import com.ssafy.tourist.domain.course.db.repository.TouristImgPathRepository;
import com.ssafy.tourist.domain.course.db.repository.TouristRepository;
import com.ssafy.tourist.domain.course.db.repository.TouristRepositorySpp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TouristServiceImpl implements TouristService{

    @Autowired
    TouristRepository touristRepository;

    @Autowired
    TouristImgPathRepository touristImgPathRepository;

    @Autowired
    TouristRepositorySpp touristRepositorySpp;


    @Value("${app.fileupload.uploadDir}")
    private String uploadFolder;

    @Value("${app.fileupload.uploadPath}")
    private String uploadPath;


    @Override
    public Page<TouristSearch> touristSearchByUser(String keywords, Pageable pageable) { return touristRepositorySpp.findTouristSearchByUser(keywords, pageable); }

    @Override
    public List<Tourist> locationTouristByUser(double lat, double lng) { return touristRepository.findLocationTouristBy(lat, lng); }

    @Override
    public String getTouristImgPath(int fileId, int touristId) {
        TouristImgPath touristImgPath = touristImgPathRepository.findTouristImgPathByFileIdAndTouristId(fileId, touristId);
        String path = uploadPath + touristImgPath.getFileUrl();

        System.out.println(path);
        return path;
    }
}
