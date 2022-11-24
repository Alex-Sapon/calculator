import styled from 'styled-components';

import { border, radius, padding } from '@styles/theme';

export const ButtonStyled = styled.div`
  width: fit-content;
  padding: ${padding.button.tb}px ${padding.button.rl}px;
  background-color: ${({ theme }) => theme.color.lightGrey};
  border: ${({ theme }) => `${border.b2}px solid ${theme.color.border}`};
  display: flex;
  justify-content: center;
  align-self: center;
  border-radius: ${radius.r5}px;
  cursor: pointer;
  transition: all ease 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.color.secondaryBackground};
    color: ${({ theme }) => theme.color.white};
  }
`;
