package com.ssafy.tourist.domain.record.db.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TagID implements Serializable {
    int tagId;
    int code;
}
