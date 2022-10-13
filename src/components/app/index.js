import { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { PATH } from '@constants/path';

import { Container } from '@components/app/styles';
import { Header } from '@components/header';
// import { HomeFC } from '@pages/homeFC';
// import { HomeCC } from '@pages/homeCC';
// import { Settings } from '@pages/settings';

import { theme } from '@styles/theme';
import { ThemeProvider } from 'styled-components';

export const App = () => {
  const [currentTheme, setCurrentTheme] = useState('light');

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <Container>
        <Header/>
        <Routes>
          {/*<Route path={'/'} element={<Navigate to={PATH.HOME_FC}/>}/>*/}
          {/*<Route path={PATH.HOME_FC} element={<HomeFC/>}/>*/}
          {/*<Route path={PATH.HOME_CC} element={<HomeCC/>}/>*/}
          {/*<Route path={PATH.SETTINGS} element={<Settings theme={currentTheme} onThemeChange={setCurrentTheme}/>}/>*/}
        </Routes>
      </Container>
    </ThemeProvider>
  );
}
