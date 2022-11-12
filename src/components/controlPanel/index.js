import React from 'react';

import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@components/calculatorFC/buttonFC';
import { Select, SettingsContainer, SettingsGroup, Title } from '@components/controlPanel/styles';
import { themeOptions } from '@constants/themeOptions';
import { clearAll, setTheme } from '@store/actions';
import { selectTheme } from '@store/selectors';

const ControlPanel = () => {
  const dispatch = useDispatch();

  const theme = useSelector(selectTheme);

  const onClickHandler = () => {
    dispatch(clearAll());
  };

  const onChangeHandler = event => {
    dispatch(setTheme(event.currentTarget.value));
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
  onThemeChange: PropTypes.func,
};

export default ControlPanel;
