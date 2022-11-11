import React from "react";

import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { Button } from "@components/calculatorFC/buttonFC";
import { SettingsGroup, Title, SettingsContainer, Select } from "@components/controlPanel/styles";
import { themeOptions } from "@constants/themeOptions";
import { clearAll } from "@store/actions";

const ControlPanel = ({ theme, onThemeChange }) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(clearAll());
  };

  const onChangeHandler = event => {
    onThemeChange(event.currentTarget.value);
  };

  return (
    <SettingsContainer data-cy="settings">
      <Title>Settings</Title>
      <SettingsGroup>
        <Select
          value={theme}
          onChange={onChangeHandler}
          data-cy="selectTheme"
        >
          {themeOptions.map(({ id, value, name }) =>
            <option key={id} value={value}>{name}</option>,
          )}
        </Select>
        <Button
          handleClick={onClickHandler}
          title="Clear All History"
        />
      </SettingsGroup>
    </SettingsContainer>
  );
};

ControlPanel.propsType = {
  theme: PropTypes.string,
  onThemeChange: PropTypes.string,
};

export default ControlPanel;
