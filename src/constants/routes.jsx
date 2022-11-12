import React from "react";

import { PATH } from "@constants/path";
import { CalculatorFC } from "@pages/homeFC";

const CalculatorCC = React.lazy(() => import("@pages/homeCC"));
const ControlPanel = React.lazy(() => import("@pages/settings"));

export const routes = [
  { id: 1, path: PATH.HOME, page: <CalculatorFC /> },
  { id: 2, path: PATH.HOME_CC, page: <CalculatorCC /> },
  { id: 3, path: PATH.SETTINGS, page: <ControlPanel /> },
];
