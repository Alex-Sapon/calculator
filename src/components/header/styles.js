import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderStyled = styled.header`
  color: ${({theme}) => theme.text};
  font-size: 18px;
  height: 70px;
  background-color: ${({theme}) => theme.secondaryBackground};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.span`
  margin-right: 30px;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
`;

export const NavLinkStyled = styled(NavLink)`
  border-bottom: 2px solid transparent;
  cursor: pointer;
  color: ${({theme}) => theme.text};

  &:hover {
    border-bottom: 2px solid #fff;
  }

  &:nth-child(2) {
    margin: 0 20px;
  }

  &.active {
    color: #fff;
    border-bottom: 2px solid #fff;
  }
`;
