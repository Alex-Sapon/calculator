import React from 'react';

import PropTypes from 'prop-types';

import { ButtonStyled } from '@components/button/styles';

export const Button = ({ title, onClick }) => (
  <ButtonStyled onClick={onClick}>
    {title}
  </ButtonStyled>
);

Button.propsType = {
  title: PropTypes.string,
  onClick: PropTypes.func,
};
