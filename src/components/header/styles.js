import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyled = styled.header`
  color: ${({ theme }) => theme.color.primary};
  font-size: 18px;
  height: 70px;
  min-width: 590px;
  background-color: ${({ theme }) => theme.color.secondaryBackground};
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 767.98px) {
    min-width: 380px;
    justify-content: center;
    height: 60px;
  }
`;

export const Logo = styled.span`
  margin-right: 30px;

  @media (max-width: 767.98px) {
    display: none;
  }
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
`;

export const NavLinkStyled = styled(NavLink)`
  padding: 3px 0;
  border-bottom: ${({ theme }) => `2px solid ${theme.color.transparent}`};
  cursor: pointer;
  color: ${({ theme }) => theme.color.primary};

  &:hover {
    border-bottom: ${({ theme }) => `2px solid ${theme.color.white}`};
  }

  &:nth-child(2) {
    margin: 0 20px;
  }

  &.active {
    color: ${({ theme }) => theme.color.white};
    border-bottom: ${({ theme }) => `2px solid ${theme.color.white}`};
  }
`;
