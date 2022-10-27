import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background-color: ${({ theme }) => theme.background};
  border: ${({ theme }) => `1px solid ${theme.border}`};
  margin-top: 10%;
  -webkit-box-shadow: 0 3px 9px 2px rgba(34, 60, 80, .1);
`;
