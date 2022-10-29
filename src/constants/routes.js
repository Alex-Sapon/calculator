import { Navigate } from 'react-router-dom';
import { CalculatorFC } from '@pages/homeFC';
import { CalculatorCC } from '@pages/homeCC';
import { ControlPanel } from '@pages/settings';
import { PATH } from '@constants/path';

export const routes = [
  { id: 1, path: PATH.HOME, page: () => <Navigate to={PATH.HOME_FC}/> },
  { id: 2, path: PATH.HOME_FC, page: () => <CalculatorFC/> },
  { id: 3, path: PATH.HOME_CC, page: () => <CalculatorCC/> },
  { id: 4, path: PATH.SETTINGS, page: (theme, onChange) => <ControlPanel theme={theme} onThemeChange={onChange}/> },
]
