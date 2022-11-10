import React from 'react';

import { PATH } from '@constants/path';
import { CalculatorFC } from '@pages/homeFC';

const CalculatorCC = React.lazy(() => import('@pages/homeCC'));
const ControlPanel = React.lazy(() => import('@pages/settings'));

const homePage = () => <CalculatorFC/>;
const homeClassPage = () => <CalculatorCC/>;
const settingsPage = (theme, onChange) => <ControlPanel theme={theme} onThemeChange={onChange}/>;

export const routes = [
  { id: 1, path: PATH.HOME, page: homePage },
  { id: 2, path: PATH.HOME_CC, page: homeClassPage },
  { id: 3, path: PATH.SETTINGS, page: settingsPage },
];
