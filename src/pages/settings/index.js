import { SettingsGroup, Title, Wrapper, Select, ButtonClear } from '@pages/settings/styles';
import { themeOptions } from '@constants/themeOptions';
import { useActions } from '@store/hooks/useActions';
import { actions } from '@store/actions';
import { calculation } from '../../assets/calculator';

export const Settings = ({theme, onThemeChange}) => {
  const {clearAll} = useActions(actions);

  const onButtonClick = () => {
    clearAll();
    calculation(null, null);
  }

  return (
    <Wrapper>
      <Title>Settings</Title>
      <SettingsGroup>
        <Select value={theme} onChange={(e) => onThemeChange(e.currentTarget.value)}>
          {themeOptions.map(({id, value, name}) => <option key={id} value={value}>{name}</option>)}
        </Select>
        <ButtonClear onClick={onButtonClick}>Clear All History</ButtonClear>
      </SettingsGroup>
    </Wrapper>
  )
};
