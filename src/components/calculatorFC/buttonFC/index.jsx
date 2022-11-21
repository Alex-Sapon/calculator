import React, { memo } from 'react';

import PropTypes from 'prop-types';

import { ButtonStyled } from '@components/containers';

export const Button = memo(({ title, handleClick }) => (
  <ButtonStyled onClick={handleClick}>
    {title}
  </ButtonStyled>
));

Button.propsType = {
  title: PropTypes.string,
  handleClick: PropTypes.func,
};
