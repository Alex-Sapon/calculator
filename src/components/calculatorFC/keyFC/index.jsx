import React, { memo } from 'react';

import PropTypes from 'prop-types';

import { KeyStyled } from '@components/containers';

const KeyComponent = ({ innerText }) => (
  <KeyStyled>{innerText}</KeyStyled>
);

KeyComponent.propsType = {
  innerText: PropTypes.func,
};

export const Key = memo(KeyComponent);
