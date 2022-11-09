import React from 'react';

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { Button } from '@components/button/buttonFC';
import { themeOptions } from '@constants/themeOptions';
import { SettingsGroup, Title, SettingsContainer, Select } from '@pages/settings/styles';
import { clearAll } from '@store/actions';


export const ControlPanel = ({ theme, onThemeChange }) => {
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
          onClick={onClickHandler}
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
