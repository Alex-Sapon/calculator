import React from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@components/calculatorFC/buttonFC';
import { Select, SettingsContainer, SettingsGroup, Title } from '@components/controlPanel/styles';
import { themeOptions } from '@constants/themeOptions';
import { changeVisibleHistory, clearAll, setTheme } from '@store/actions';
import { selectIsShow, selectTheme } from '@store/selectors';

const ControlPanel = () => {
  const dispatch = useDispatch();

  const theme = useSelector(selectTheme);
  const isShow = useSelector(selectIsShow);

  const onClearAllHandler = () => {
    dispatch(clearAll());
  };

  const onChangeThemeHandler = event => {
    dispatch(setTheme(event.currentTarget.value));
  };

  const onIsShowHandler = () => {
    dispatch(changeVisibleHistory(!isShow));
  };

  return (
    <SettingsContainer data-cy="settings">
      <Title>Settings</Title>
      <SettingsGroup>
        <Button
          title="Clear All History"
          handleClick={onClearAllHandler}
        />
        <Button
          title={`${isShow ? 'Close' : 'Show'} history`}
          handleClick={onIsShowHandler}
        />
        <Select
          value={theme}
          onChange={onChangeThemeHandler}
          data-cy="selectTheme"
        >
          {themeOptions.map(({ id, value, name }) =>
            <option key={id} value={value}>{name}</option>,
          )}
        </Select>
      </SettingsGroup>
    </SettingsContainer>
  );
};

export default ControlPanel;
