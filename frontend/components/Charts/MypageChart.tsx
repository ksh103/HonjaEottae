import { ResponsiveBar } from '@nivo/bar';
import { NextPage } from 'next';
// import { data } from './MypageData';
const MypageChart: NextPage = () => {
  const data = [
    {
      country: 'AD',
      'hot dog': 199,
      'hot dogColor': 'hsl(64, 70%, 50%)',
      burger: 109,
      burgerColor: 'hsl(186, 70%, 50%)',
      sandwich: 7,
      sandwichColor: 'hsl(162, 70%, 50%)',
      kebab: 27,
      kebabColor: 'hsl(10, 70%, 50%)',
      fries: 105,
      friesColor: 'hsl(44, 70%, 50%)',
      donut: 7,
      donutColor: 'hsl(41, 70%, 50%)',
    },
    {
      country: 'AE',
      'hot dog': 25,
      'hot dogColor': 'hsl(160, 70%, 50%)',
      burger: 3,
      burgerColor: 'hsl(205, 70%, 50%)',
      sandwich: 19,
      sandwichColor: 'hsl(165, 70%, 50%)',
      kebab: 122,
      kebabColor: 'hsl(179, 70%, 50%)',
      fries: 52,
      friesColor: 'hsl(328, 70%, 50%)',
      donut: 129,
      donutColor: 'hsl(32, 70%, 50%)',
    },
    {
      country: 'AF',
      'hot dog': 42,
      'hot dogColor': 'hsl(344, 70%, 50%)',
      burger: 71,
      burgerColor: 'hsl(47, 70%, 50%)',
      sandwich: 90,
      sandwichColor: 'hsl(163, 70%, 50%)',
      kebab: 0,
      kebabColor: 'hsl(166, 70%, 50%)',
      fries: 199,
      friesColor: 'hsl(258, 70%, 50%)',
      donut: 69,
      donutColor: 'hsl(252, 70%, 50%)',
    },
    {
      country: 'AG',
      'hot dog': 131,
      'hot dogColor': 'hsl(213, 70%, 50%)',
      burger: 18,
      burgerColor: 'hsl(184, 70%, 50%)',
      sandwich: 196,
      sandwichColor: 'hsl(245, 70%, 50%)',
      kebab: 175,
      kebabColor: 'hsl(261, 70%, 50%)',
      fries: 47,
      friesColor: 'hsl(349, 70%, 50%)',
      donut: 53,
      donutColor: 'hsl(39, 70%, 50%)',
    },
    {
      country: 'AI',
      'hot dog': 181,
      'hot dogColor': 'hsl(256, 70%, 50%)',
      burger: 11,
      burgerColor: 'hsl(206, 70%, 50%)',
      sandwich: 125,
      sandwichColor: 'hsl(318, 70%, 50%)',
      kebab: 77,
      kebabColor: 'hsl(168, 70%, 50%)',
      fries: 46,
      friesColor: 'hsl(318, 70%, 50%)',
      donut: 142,
      donutColor: 'hsl(215, 70%, 50%)',
    },
    {
      country: 'AL',
      'hot dog': 164,
      'hot dogColor': 'hsl(42, 70%, 50%)',
      burger: 168,
      burgerColor: 'hsl(76, 70%, 50%)',
      sandwich: 126,
      sandwichColor: 'hsl(38, 70%, 50%)',
      kebab: 32,
      kebabColor: 'hsl(226, 70%, 50%)',
      fries: 147,
      friesColor: 'hsl(46, 70%, 50%)',
      donut: 183,
      donutColor: 'hsl(183, 70%, 50%)',
    },
    {
      country: 'AM',
      'hot dog': 14,
      'hot dogColor': 'hsl(149, 70%, 50%)',
      burger: 55,
      burgerColor: 'hsl(286, 70%, 50%)',
      sandwich: 124,
      sandwichColor: 'hsl(87, 70%, 50%)',
      kebab: 72,
      kebabColor: 'hsl(182, 70%, 50%)',
      fries: 154,
      friesColor: 'hsl(238, 70%, 50%)',
      donut: 112,
      donutColor: 'hsl(292, 70%, 50%)',
    },
  ];
  return (
    <ResponsiveBar
      data={data}
      keys={['hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut']}
      indexBy="country"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: 'linear' }}
      indexScale={{ type: 'band', round: true }}
      colors={{ scheme: 'nivo' }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: '#38bcb2',
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: '#eed312',
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      fill={[
        {
          match: {
            id: 'fries',
          },
          id: 'dots',
        },
        {
          match: {
            id: 'sandwich',
          },
          id: 'lines',
        },
      ]}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 1.6]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'country',
        legendPosition: 'middle',
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: 'food',
        legendPosition: 'middle',
        legendOffset: -40,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: 'color',
        modifiers: [['darker', 1.6]],
      }}
      legends={[
        {
          dataFrom: 'keys',
          anchor: 'bottom-right',
          direction: 'column',
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: 'left-to-right',
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: 'hover',
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      ariaLabel="Nivo bar chart demo"
      barAriaLabel={function (e) {
        return e.id + ': ' + e.formattedValue + ' in country: ' + e.indexValue;
      }}
    />
  );
};

export default MypageChart;
