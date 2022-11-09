import React from 'react';

import PropTypes from 'prop-types';

import { ButtonStyled } from '@components/button/styles';

export class Button extends React.PureComponent {
  render() {
    const { title, onClick } = this.props;

    return (
      <ButtonStyled onClick={onClick}>
        {title}
      </ButtonStyled>
    );
  }
}

Button.propsType = {
  title: PropTypes.string,
  onClick: PropTypes.func,
};
