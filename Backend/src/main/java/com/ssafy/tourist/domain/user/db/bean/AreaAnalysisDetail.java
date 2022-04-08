package com.ssafy.tourist.domain.user.db.bean;

import lombok.Data;

@Data
public class AreaAnalysisDetail {
    private String touristAddress;
    private Long touristCount;

    public AreaAnalysisDetail(String touristAddress, Long touristCount) {
        this.touristAddress = changeTouristAddress(touristAddress);

        this.touristCount = touristCount;
    }

    public String changeTouristAddress(String touristAddress) {
        if((touristAddress.substring(0,1).equals("경") && !touristAddress.substring(1,2).equals("기"))
                || touristAddress.substring(0,1).equals("전")
                || touristAddress.substring(0,1).equals("충")){
           return touristAddress.substring(0,1)+touristAddress.substring(2,3);
        }else{
            return touristAddress.substring(0,2);
        }
    }
}
