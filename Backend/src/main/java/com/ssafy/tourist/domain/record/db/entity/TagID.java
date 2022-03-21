package com.ssafy.tourist.domain.record.db.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TagID implements Serializable {
    @Column(name = "tag_id")
    int tagId;

    @Column(name = "code")
    int code;
}
