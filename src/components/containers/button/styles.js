import styled from 'styled-components';

export const ButtonStyled = styled.div`
  min-width: 130px;
  padding: 8px 15px;
  background-color: #f2f2f2;
  border: ${({ theme }) => `2px solid ${theme.border}`};
  display: flex;
  justify-content: center;
  align-self: center;
  border-radius: 5px;
  cursor: pointer;
  transition: all ease 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.secondaryBackground};
    color: #fff;
  }
`;
