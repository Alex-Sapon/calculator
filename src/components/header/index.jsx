import { HeaderStyled, Logo, NavList, NavLinkStyled } from '@components/header/styles';
import { links } from '@constants/links';

export const Header = () => (
  <HeaderStyled data-cy="header">
    <Logo>Calculator App</Logo>
    <NavList data-cy="navList">
      {links.map(({ path, value }) =>
        <NavLinkStyled key={value} to={path}>{value}</NavLinkStyled>,
      )}
    </NavList>
  </HeaderStyled>
)
