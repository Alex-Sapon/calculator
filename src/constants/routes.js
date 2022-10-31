import { CalculatorFC } from '@pages/homeFC';
import { CalculatorCC } from '@pages/homeCC';
import { ControlPanel } from '@pages/settings';
import { PATH } from '@constants/path';

const homePage = () => <CalculatorFC/>;
const homeClassPage = () => <CalculatorCC/>;
const settingsPage = (theme, onChange) => <ControlPanel theme={theme} onThemeChange={onChange}/>;

export const routes = [
  { id: 1, path: PATH.HOME, page: homePage },
  { id: 2, path: PATH.HOME_CC, page: homeClassPage },
  { id: 3, path: PATH.SETTINGS, page: settingsPage }
]
