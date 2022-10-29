import React from 'react';
import PropTypes from 'prop-types';
import { ButtonStyled } from '@components/button/styles';

export class Button extends React.Component {
  render() {
    return (
      <ButtonStyled onClick={this.props.onClick}>
        {this.props.title}
      </ButtonStyled>
    )
  }
}

Button.propsType = {
  title: PropTypes.string,
  onClick: PropTypes.func,
}
