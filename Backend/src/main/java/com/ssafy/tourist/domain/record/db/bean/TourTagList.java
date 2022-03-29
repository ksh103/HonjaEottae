package com.ssafy.tourist.domain.record.db.bean;


import lombok.AllArgsConstructor;
import lombok.Data;


@Data
@AllArgsConstructor
public class TourTagList {
    private String codeName;
    private int tagId;
    private String tagName;
}
