import React, { Suspense } from 'react';

import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Container } from '@components/app/styles';
import { ErrorBoundary } from '@components/errorBoundary';
import { Header } from '@components/header';
import { Spinner } from '@components/spinner';
import { routes } from '@constants/routes';
import { selectTheme } from '@store/selectors';
import { theme } from '@styles/theme';

export const App = () => {
  const currentTheme = useSelector(selectTheme);

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <ErrorBoundary>
        <Container>
          <Header />
          <Suspense fallback={<Spinner />}>
            <Routes>
              {routes.map(({ id, path, page }) =>
                <Route
                  key={id}
                  path={path}
                  element={page}
                />,
              )}
            </Routes>
          </Suspense>
        </Container>
      </ErrorBoundary>
    </ThemeProvider>
  );
};
