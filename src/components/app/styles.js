import styled from 'styled-components';

export const Container = styled.div`
  min-width: 595px;
  background-color: ${({ theme }) => theme.color.background};
  margin-top: 10%;
  -webkit-box-shadow: ${({ theme }) => theme.boxShadow[0]};

  @media (max-width: 767.98px) {
    min-width: 385px;
`;
