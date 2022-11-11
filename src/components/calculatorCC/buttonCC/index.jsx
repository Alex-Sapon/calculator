import React from 'react';

import PropTypes from 'prop-types';

import { ButtonStyled } from '@components/containers/button/styles';

export class Button extends React.PureComponent {
  render() {
    const { title, handleClick } = this.props;

    return (
      <ButtonStyled onClick={handleClick}>
        {title}
      </ButtonStyled>
    );
  }
}

Button.propsType = {
  title: PropTypes.string,
  handleClick: PropTypes.func,
};
