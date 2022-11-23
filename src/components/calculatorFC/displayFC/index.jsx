import React from 'react';

import { useSelector } from 'react-redux';

import { DisplayHistory, DisplayMain, Expression } from '@components/containers';
import { numberWithCommas } from '@helpers';
import { selectValue, selectExpression, selectResult } from '@store/selectors';

export const Display = () => {
  const expression = numberWithCommas(useSelector(selectExpression));
  const value = numberWithCommas(useSelector(selectValue));
  const result = numberWithCommas(useSelector(selectResult));

  return (
    <React.Fragment>
      <DisplayHistory data-cy="displayHistory">
        <Expression>{expression}</Expression>
      </DisplayHistory>
      <DisplayMain data-cy="displayMain">{value || result}</DisplayMain>
    </React.Fragment>
  );
};
