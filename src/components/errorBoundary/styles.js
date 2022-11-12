import styled from "styled-components";

export const ErrorWrapper = styled.div`
  max-width: 590px;
  height: 505px;
  padding: 40px;
  background-color: ${({ theme }) => theme.color.white};
  border: ${({ theme }) => `1px solid ${theme.color.error}`};
  margin: 10% auto 0;
  color: ${({ theme }) => theme.color.error};
  -webkit-box-shadow: ${({ theme }) => theme.boxShadow[0]};

  @media (max-width: 767.98px) {
    padding: 20px;
  }
`;

export const ErrorTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSize[4]}px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 40px;
`;

export const ErrorSubtitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize[3]}px;
  margin-bottom: 20px;
`;
