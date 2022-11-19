import React, { memo } from 'react';

import { useSelector } from 'react-redux';

import { DisplayHistory, DisplayMain, Expression } from '@components/containers';
import { numberWithCommas } from '@helpers';
import { selectValue, selectExpression, selectResult, selectViewMode } from '@store/selectors';

export const Display = memo(() => {
  const expression = numberWithCommas(useSelector(selectExpression));
  const value = numberWithCommas(useSelector(selectValue));
  const result = numberWithCommas(useSelector(selectResult));
  const viewMode = useSelector(selectViewMode);

  return (
    <React.Fragment>
      <DisplayHistory data-cy="displayHistory">
        {viewMode && <Expression>{expression}</Expression>}
      </DisplayHistory>
      <DisplayMain data-cy="displayMain">{value || result}</DisplayMain>
    </React.Fragment>
  );
});
