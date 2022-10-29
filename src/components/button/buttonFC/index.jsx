import { ButtonStyled } from '@components/button/styles';
import PropTypes from 'prop-types';

export const Button = ({ title, onClick }) => (
  <ButtonStyled onClick={onClick}>
    {title}
  </ButtonStyled>
)

Button.propsType = {
  title: PropTypes.string,
  onClick: PropTypes.func,
}
