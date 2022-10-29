import React from 'react';
import { DisplayHistory, DisplayMain } from '@components/calculator/display/styles';
import { useSelector } from 'react-redux';
import { selectValue, selectExpression, selectResult, selectOperation } from '@store/selectors';
import { numberWithCommas } from '@helpers';

export const Display = () => {
  const expression = numberWithCommas(useSelector(selectExpression));
  const value = numberWithCommas(useSelector(selectValue));
  const result = numberWithCommas(useSelector(selectResult));
  const operation = useSelector(selectOperation);

  return (
    <React.Fragment>
      <DisplayHistory data-cy="displayHistory">
        {`${expression} ${operation}`}
      </DisplayHistory>
      <DisplayMain data-cy="displayMain">
        {value || result}
      </DisplayMain>
    </React.Fragment>
  )
}
