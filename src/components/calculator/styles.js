import styled from 'styled-components';

export const Calculator = styled.div`
  display: grid;
  grid-template-columns: 1fr 200px;
  gap: 10px;

  @media (max-width: 767.98px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 20px;
  margin: 20px 0 10px 0;
  color: ${({ theme }) => theme.primary};
`;
