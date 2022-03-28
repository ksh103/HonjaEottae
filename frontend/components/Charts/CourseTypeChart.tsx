import React, { useEffect, useState } from 'react';
import { ResponsiveTreeMap } from '@nivo/treemap';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { ResponsivePie } from '@nivo/pie';
// const data = [
//   {
//     id: 'A타입',
//     label: '역동적이고 에너지가 넘치는 청춘 여행',
//     value: 1,
//   },
//   {
//     id: 'B타입',
//     label: '유명한 관광지만 골라가는 알짜배기 여행',
//     value: 2,
//   },
//   {
//     id: 'C타입',
//     label: '탁 트인 바다를 보며 느긋하게 힐링하는 여행',
//     value: 3,
//   },
//   {
//     id: 'D타입',
//     label: '푸르른 산속 맑은 공기를 즐기는 여행',
//     value: 4,
//   },
//   {
//     id: 'E타입',
//     label: '여행지의 이색적인 맛과 역사를 즐기는 여행',
//     value: 5,
//   },
//   {
//     id: 'F타입',
//     label: '여행지의 전통적인 맛과 문화를 즐기는 여행',
//     value: 6,
//   },
// ];
export default function CourseTypeChart() {
  const { courseType } = useSelector((state: RootState) => state.course2);
  const [data, setData] = useState<any>([]);
  useEffect(() => {
    if (courseType.length > 0) {
      const result = courseType.map(a => {
        return {
          id: String.fromCharCode(a.tourTestId + 64) + ' 타입',
          label: a.tourTestName.slice(0, -4),
          value: a.tourTestCount,
        };
      });
      setData(result);
    }
  }, [courseType]);

  return (
    <>
      {data.length > 0 && (
        <ResponsivePie
          data={data}
          margin={{ top: 20, right: -170, bottom: 20, left: 100 }}
          innerRadius={0.4}
          colors={{ scheme: 'nivo' }}
          arcLinkLabelsTextColor="#333333"
          enableArcLinkLabels={false}
          legends={[
            {
              anchor: 'left',
              direction: 'column',
              justify: false,
              translateX: -100,
              translateY: 0,
              itemsSpacing: 10,
              itemWidth: 220,
              itemHeight: 18,
              itemTextColor: '#999',
              itemDirection: 'left-to-right',
              symbolSize: 15,
              symbolShape: 'circle',
              effects: [
                {
                  on: 'hover',
                  style: {
                    itemTextColor: '#000',
                  },
                },
              ],
            },
          ]}
        />
      )}
    </>
  );
}
