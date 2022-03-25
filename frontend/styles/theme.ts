import { DefaultTheme } from 'styled-components';

const size = {
  mobile: '400px',
  tablet: '768px',
  laptopS: '900px',
  laptopM: '1239px',
  desktop: '1240px',
};

const flex = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptopS: `(max-width: ${size.laptopS})`,
  laptopM: `(max-width: ${size.laptopM})`,
  desktop: `(min-width: ${size.desktop})`,
};

const theme: DefaultTheme = {
  ...flex,
  colors: {
    pointColor: '#F7323F',
    backgroundColor: '#f5f5f5',
  },
};

export default theme;
