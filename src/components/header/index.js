import { HeaderStyled, Logo, NavList, NavLinkStyled } from '@components/header/styles';
import { PATH } from '@constants/path';

export const Header = () => {
  return (
    <HeaderStyled>
      <Logo>Calculator App</Logo>
      <NavList>
        <NavLinkStyled to={PATH.HOME_FC}>HomeFC</NavLinkStyled>
        <NavLinkStyled to={PATH.HOME_CC}>HomeCC</NavLinkStyled>
        <NavLinkStyled to={PATH.SETTINGS}>Settings</NavLinkStyled>
      </NavList>
    </HeaderStyled>
  )
}
