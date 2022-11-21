import styled from 'styled-components';

import { border, width, radius } from '@styles/theme';

export const ButtonStyled = styled.div`
  //width: ${width.button}px;
  width: fit-content;
  padding: 8px 15px;
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
