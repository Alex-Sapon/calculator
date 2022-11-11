import React from 'react';

import { useSelector } from 'react-redux';

import { DisplayHistory, DisplayMain, Expression, Operator } from '@components/containers/display/styles';
import { numberWithCommas } from '@helpers';
import { selectValue, selectExpression, selectResult, selectOperation } from '@store/selectors';

export const Display = () => {
  const expression = numberWithCommas(useSelector(selectExpression));
  const value = numberWithCommas(useSelector(selectValue));
  const result = numberWithCommas(useSelector(selectResult));
  const operation = useSelector(selectOperation);

  return (
    <React.Fragment>
      <DisplayHistory data-cy="displayHistory">
        <Expression>{expression}</Expression>
        <Operator>{operation}</Operator>
      </DisplayHistory>
      <DisplayMain data-cy="displayMain">{value || result}</DisplayMain>
    </React.Fragment>
  );
};
