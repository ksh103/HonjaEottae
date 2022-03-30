import { Card } from 'antd';
import Link from 'next/link';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import {
  MainGraphBlock,
  MapAreaBox,
  KoreaMap,
  AreaCourses,
} from './MainPage.style';

const datas = [
  {
    courseId: 1,
    courseName: '지리산의 깊은 산자락 속에 세상 시름을 묻다',
  },
  {
    courseId: 2,
    courseName: '낮이 좋아? 밤이 좋아? 서울의 주경, 야경 여행코스',
  },
  {
    courseId: 3,
    courseName: '제주 사계해안도로, 바다와 산의 하모니에 홀릭하다!',
  },
  {
    courseId: 4,
    courseName: '화산이 만든 비경을 찾아가는 탐험길',
  },
  {
    courseId: 5,
    courseName: '부산의 아름다운 낮과 밤을 느끼는 주경, 야경 여행',
  },
];

export default function MainGraph() {
  const { areaCourseCount } = useSelector((state: RootState) => state.course2);
  const [area, setArea] = useState(3);
  const ClickAreaBlock = (num: number) => {
    setArea(num);
  };
  return (
    <>
      {areaCourseCount.length > 0 && (
        <MainGraphBlock>
          <KoreaMap>
            <div>
              {areaCourseCount.map((data, i) => (
                <MapAreaBox
                  key={i}
                  x={data.areaX}
                  y={data.areaY}
                  select={area === data.areaId}
                  onClick={() => ClickAreaBlock(data.areaId)}
                >
                  <div>{data.areaName}</div>
                  <div>
                    {data.areaCount
                      .toString()
                      .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')}
                  </div>
                </MapAreaBox>
              ))}
              <img src="/images/korea.png" alt="map" />
            </div>
          </KoreaMap>
          <AreaCourses>
            <div className="area-title">지역별 관광 코스</div>
            <div className="area-name">
              {areaCourseCount[area - 1].areaName}
            </div>

            {datas.map(data => (
              <Link href={`/course/${data.courseId}`} key={data.courseId}>
                <Card className="area-course">{data.courseName}</Card>
              </Link>
            ))}
          </AreaCourses>
        </MainGraphBlock>
      )}
    </>
  );
}
