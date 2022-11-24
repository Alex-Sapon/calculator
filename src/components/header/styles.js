import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { fontSize, border, height, padding, margin } from '@styles/theme';

export const HeaderStyled = styled.header`
  color: ${({ theme }) => theme.color.primary};
  font-size: ${fontSize.fz18}px;
  height: ${height.header.basic}px;
  background-color: ${({ theme }) => theme.color.secondaryBackground};
  padding: ${padding.header.basic}px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 767.98px) {
    justify-content: center;
    height: ${height.header.small}px;
  }
`;

export const Logo = styled.span`
  margin-right: ${margin.logo}px;

  @media (max-width: 767.98px) {
    display: none;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
`;

export const NavLinkStyled = styled(NavLink)`
  padding: ${padding.link.basic}px 0;
  border-bottom: ${border.b2}px solid transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.color.primary};

  &:hover {
    border-bottom: ${({ theme }) => `${border.b2}px solid ${theme.color.white}`};
  }

  &:nth-child(2) {
    margin: 0 ${margin.linkChildTwo}px;
  }

  &.active {
    color: ${({ theme }) => theme.color.white};
    border-bottom: ${({ theme }) => `${border.b2}px solid ${theme.color.white}`};
  }
`;
