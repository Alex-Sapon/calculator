import React from 'react';

import { PATH } from '@constants/path';
import { CalculatorCC } from '@pages/homeCC';
import { CalculatorFC } from '@pages/homeFC';
import { ControlPanel } from '@pages/settings';

const homePage = () => <CalculatorFC/>;
const homeClassPage = () => <CalculatorCC/>;
const settingsPage = (theme, onChange) => <ControlPanel theme={theme} onThemeChange={onChange}/>;

export const routes = [
  { id: 1, path: PATH.HOME, page: homePage },
  { id: 2, path: PATH.HOME_CC, page: homeClassPage },
  { id: 3, path: PATH.SETTINGS, page: settingsPage },
];
