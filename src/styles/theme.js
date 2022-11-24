// ----- color -----
const color = {
  white: '#ffffff',
  secondaryWhite: '#e1e1e1',
  grey: '#878787',
  lightGrey: '#f2f2f2',
  middleGrey: '#c7c7c7',
  darkGrey: '#434343',
  darkBlue: '#12171B',
  lightBlue: '#9AAFBD',
  darkYellow: '#989385',
  lightLime: '#F7F8ED',
  lightOrange: '#E1D7C7',
  green: '#7DA11A',
  error: '#ea5d5d',
  errorBarBG: '#fdeded',
  errorBarText: '#5f2120',
};

// ----- height -----
export const height = {
  header: { basic: 70, small: 60 },
  calculator: { basic: 425, small: 651 },
  displayMain: 50,
  displayHistory: 20,
  history: { small: 150 },
  settings: { basic: 424, small: 651 },
  error: { basic: 495, small: 711 },
  spinner: 80,
  errorBar: 150,
};

// ----- width -----
export const width = {
  app: { basic: 595, small: 385 },
  spinner: { wrapper: 80, element: 16 },
  scrollbar: 7,
  errorBar: 40,
};

// ----- padding -----
export const padding = {
  header: { basic: 20 },
  link: { basic: 3 },
  leftSide: { basic: 20, small: { t: 20, r: 20, b: 0, l: 20 } },
  rightSide: { basic: 20 },
  displayHistory: { tb: 0, rl: 10 },
  displayMain: { basic: 10 },
  button: { tb: 8, rl: 15 },
  keypad: { basic: 0, small: 20 },
  settings: { basic: 20 },
  select: { basic: 7 },
  errorWrap: { basic: 40, small: 20 },
  errorBoundary: { basic: 40, small: 20 },
  alertBar: { tb: 15, rl: 10 }, 
};

// ----- margin -----
export const margin = {
  appContainer: 10,
  linkChildTwo: 20,
  calculator: 10,
  displayMain: 20,
  historyItem: 5,
  controlTitle: 20,
  errorWrap: 10,
  errorTitle: 10,
  logo: 30,
  alertBar: 10, 
};

// ----- position -----
export const position = {
  alertBar: { t: 0, r: 0, b: 5, l: 5 },
  elemSpinner: { t: 0, r: 0, b: 0, l: 8 },
  elemSpinnerF: { t: 0, r: 0, b: 0, l: 8 },
  elemSpinnerS: { t: 0, r: 0, b: 0, l: 32 },
  elemSpinnerT: { t: 0, r: 0, b: 0, l: 56 },
};

// ----- grid-column -----
export const column = {
  calculator: { basic: '1fr 200px', small: '1fr' },
  keypad: { basic: 'repeat(5, 60px)' },
  settings: { basic: 'repeat(3, 1fr)', small: 'repeat(2, 1fr)' },
  alertBar: { basic: 'auto 1fr' },
};

// ----- grid-row -----
export const row = {
  keypad: { basic: 'repeat(5, 50px)' },
};

// ----- gap -----
export const gap = {
  calculator: 10,
  keypad: 10,
  settingsGroup: 30,
  alertBar: 15,
};

// ----- border -----
export const border = {
  b1: 1,
  b2: 2,
};

// ----- radius -----
export const radius = {
  r4: 4,
  r5: 5,
  r6: 6,
};

// ----- boxShadow -----
export const boxShadow = {
  appContainer: '0 3px 9px 2px rgba(34, 60, 80, .1)',
};

// ----- animation -----
export const animation = {
  spinner: '1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite',
};

// ----- fontSize -----
export const fontSize = {
  fz12: 12,
  fz14: 14,
  fz16: 16,
  fz18: 18,
  fz20: 20,
  fz24: 24,
  fz26: 26,
};

const lightTheme = {
  color: {
    primary: color.darkBlue,
    secondary: color.grey,
    background: color.white,
    border: color.secondaryWhite,
    headerText: color.middleGrey,
    secondaryBackground: color.lightBlue,
    ...color,
  },
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
};

export const theme = {
  light: lightTheme,
  dark: darkTheme,
  colored: coloredTheme,
};
