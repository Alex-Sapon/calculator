import React, { Suspense, useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { AlertBar } from '@components/alertBar';
import { Container } from '@components/app/styles';
import { ErrorBoundary } from '@components/errorBoundary';
import { Header } from '@components/header';
import { Spinner } from '@components/spinner';
import { routes } from '@constants/routes';
import { setError } from '@store/actions';
import { selectTheme } from '@store/selectors';
import { theme } from '@styles/theme';

export const App = () => {
  const dispatch = useDispatch();

  const error = useSelector(state => state.application.error);
  const currentTheme = useSelector(selectTheme);

  const onCloseClick = useCallback(() => dispatch(setError(null)), []);

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
        <AlertBar error={error} onClickHandler={onCloseClick}/>
      </ErrorBoundary>
    </ThemeProvider>
  );
};
