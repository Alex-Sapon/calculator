import React, { useState, Suspense } from "react";

import { Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Container } from "@components/app/styles";
import { Header } from "@components/header";
import { routes } from "@constants/routes";
import { theme } from "@styles/theme";

export const App = () => {
  const [currentTheme, setCurrentTheme] = useState("light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <Container>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routes.map(({ id, path, page }) =>
              <Route
                key={id}
                path={path}
                element={(page(currentTheme, setCurrentTheme))}
              />,
            )}
          </Routes>
        </Suspense>
      </Container>
    </ThemeProvider>
  );
};
