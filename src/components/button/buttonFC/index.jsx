import { ButtonStyled } from '@components/button/styles';

export const Button = ({ title, onClick }) => (
  <ButtonStyled onClick={onClick}>
    {title}
  </ButtonStyled>
)
