// Colors
const color = {
  white: '#ffffff',
  secondaryWhite: '#e1e1e1',
  grey: '#878787',
  lightGrey: '#c7c7c7',
  darkGrey: '#434343',
  darkBlue: '#12171B',
  lightBlue: '#9AAFBD',
  darkYellow: '#989385',
  lightLime: '#F7F8ED',
  lightOrange: '#E1D7C7',
  green: '#7DA11A',
  error: '#ea5d5d',
  transparent: 'transparent',
};

const size = {
  maxW: 700,
  height: 420,
};

const boxShadow = [
  '0 3px 9px 2px rgba(34, 60, 80, .1)',
];

const fontSize = [12, 14, 16, 20, 24, 26, 32, 40, 56, 72, 80];

const lightTheme = {
  color: {
    primary: color.darkBlue,
    secondary: color.grey,
    background: color.white,
    border: color.secondaryWhite,
    headerText: color.lightGrey,
    secondaryBackground: color.lightBlue,
    ...color,
  },
  size,
  fontSize,
  boxShadow,
};

const darkTheme = {
  color: {
    primary: color.white,
    secondary: color.white,
    background: color.grey,
    border: color.white,
    headerText: color.white,
    secondaryBackground: color.darkGrey,
    ...color,
  },
  size,
  fontSize,
  boxShadow,
};

const coloredTheme = {
  color: {
    primary: color.darkBlue,
    secondary: color.darkYellow,
    background: color.lightLime,
    border: color.lightOrange,
    headerText: color.darkBlue,
    secondaryBackground: color.green,
    ...color,
  },
  size,
  fontSize,
  boxShadow,
};

export const theme = {
  light: lightTheme,
  dark: darkTheme,
  colored: coloredTheme,
};
