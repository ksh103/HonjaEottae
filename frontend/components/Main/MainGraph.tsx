import { Card } from 'antd';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { getAreaCourses } from '../../store/course2';
import {
  MainGraphBlock,
  MapAreaBox,
  KoreaMap,
  AreaCourses,
} from './MainPage.style';

export default function MainGraph() {
  const dispatch = useDispatch();
  const { areaCourseCount, areaCourses } = useSelector(
    (state: RootState) => state.course2,
  );
  const [area, setArea] = useState('서울');

  useEffect(() => {
    dispatch(getAreaCourses.request('서울'));
  }, []);

  const ClickAreaBlock = (areaName: string) => {
    dispatch(getAreaCourses.request(areaName));
    setArea(areaName);
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
                  select={area === data.areaName}
                  onClick={() => ClickAreaBlock(data.areaName)}
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
            <div className="area-name">{area}</div>

            {areaCourses.length > 0 &&
              areaCourses.map(data => (
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
