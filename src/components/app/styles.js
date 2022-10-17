import styled from 'styled-components';

export const Container = styled.div`
  width: 700px;
  background-color: ${({theme}) => theme.background};
  border: ${({theme}) => `1px solid ${theme.border}`};
  margin-top: 10%;
`;