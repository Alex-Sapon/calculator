import { HeaderStyled, Logo, NavList, NavLinkStyled } from '@components/header/styles';
import { links } from '@constants/links';

export const Header = () => (
  <HeaderStyled>
    <Logo>Calculator App</Logo>
    <NavList>
      {links.map(({ path, value }) => <NavLinkStyled key={value} to={path}>{value}</NavLinkStyled>)}
    </NavList>
  </HeaderStyled>
)
