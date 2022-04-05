import React, { useEffect, useState } from 'react';
import { ResponsiveTreeMap } from '@nivo/treemap';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { ResponsivePie } from '@nivo/pie';
export default function CourseTypeChart() {
  const { courseType } = useSelector((state: RootState) => state.detail);
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
