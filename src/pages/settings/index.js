import React from 'react';
import { SettingsGroup, Title, Wrapper, Select, ButtonClear } from '@pages/settings/styles';
import { themeOptions } from '@constants/themeOptions';
import { clearAll } from '@store/actions';
import { useDispatch } from 'react-redux';
import { calculation } from '@utils/calculator';
import PropTypes from 'prop-types';

export const ControlPanel = ({ theme, onThemeChange }) => {
  const dispatch = useDispatch();

  const onButtonClick = () => {
    dispatch(clearAll());
    calculation(null, null);
  }

  return (
    <Wrapper>
      <Title>Settings</Title>
      <SettingsGroup>
        <Select value={theme} onChange={(e) => onThemeChange(e.currentTarget.value)}>
          {themeOptions.map(({ id, value, name }) => <option key={id} value={value}>{name}</option>)}
        </Select>
        <ButtonClear onClick={onButtonClick}>Clear All History</ButtonClear>
      </SettingsGroup>
    </Wrapper>
  )
}

ControlPanel.propsType = {
  theme: PropTypes.string,
  onThemeChange: PropTypes.func,
}
