import React from 'react';

import PropTypes from 'prop-types';

import { KeyStyled } from '@components/containers';

export class Key extends React.PureComponent {
  render() {
    const { innerText } = this.props;

    return (
      <KeyStyled>{innerText}</KeyStyled>
    );
  }
}

Key.propsType = {
  innerText: PropTypes.string,
};
