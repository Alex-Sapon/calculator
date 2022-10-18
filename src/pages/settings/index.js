import { SettingsGroup, Title, Wrapper, Select, ButtonClear } from '@pages/settings/styles';
import { themeOptions } from '@constants/themeOptions';
import { clearAll } from '@store/actions';
import { useDispatch } from 'react-redux';
import { calculation } from '@utils/calculator';

export const Settings = ({theme, onThemeChange}) => {
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
          {themeOptions.map(({id, value, name}) => <option key={id} value={value}>{name}</option>)}
        </Select>
        <ButtonClear onClick={onButtonClick}>Clear All History</ButtonClear>
      </SettingsGroup>
    </Wrapper>
  )
}
