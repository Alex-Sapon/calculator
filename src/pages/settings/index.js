import { SettingsGroup, Title, Wrapper, Select, ButtonClear } from '@pages/settings/styles';
import { themeOptions } from '@constants/themeOptions';

export const Settings = ({theme, onThemeChange}) => {
  return (
    <Wrapper>
      <Title>Settings</Title>
      <SettingsGroup>
        <Select value={theme} onChange={(e) => onThemeChange(e.currentTarget.value)}>
          {themeOptions.map(({id, value, name}) => <option key={id} value={value}>{name}</option>)}
        </Select>
        <ButtonClear>Clear All History</ButtonClear>
      </SettingsGroup>
    </Wrapper>
  )
};
