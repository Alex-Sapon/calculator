import styled from 'styled-components';

export const Container = styled.div`
  max-width: 590px;
  background-color: ${({ theme }) => theme.color.background};
  border: ${({ theme }) => `1px solid ${theme.color.border}`};
  margin-top: 10%;
  -webkit-box-shadow: ${({ theme }) => theme.boxShadow[0]};
`;
