import { CalculatorFC } from '@pages/homeFC';
import { CalculatorCC } from '@pages/homeCC';
import { ControlPanel } from '@pages/settings';
import { PATH } from '@constants/path';

export const routes = [
  { id: 1, path: PATH.HOME, page: () => <CalculatorFC/> },
  { id: 2, path: PATH.HOME_CC, page: () => <CalculatorCC/> },
  { id: 3, path: PATH.SETTINGS, page: (theme, onChange) => <ControlPanel theme={theme} onThemeChange={onChange}/> },
]
