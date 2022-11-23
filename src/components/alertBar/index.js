import React, { memo, useEffect } from 'react';

import ReactDOM from 'react-dom';

import { AlertBarContainer, AlertBarContent, AlertBarSubtitle, AlertBarTitle } from '@components/alertBar/styles';
import { ButtonStyled } from '@components/containers';

export const AlertBar = memo(({ error, onClickHandler, seconds }) => {
  useEffect(() => {
    if (error) {
      const idTimeout = setTimeout(
        () => onClickHandler(),
        seconds ? seconds * 1000 : 5000,
      );

      return () => {
        clearTimeout(idTimeout);
      };
    }
  }, [error]);

  if (!error) return null;

  return ReactDOM.createPortal(
    <AlertBarContainer>
      <ButtonStyled onClick={onClickHandler}>✕</ButtonStyled>
      <AlertBarContent>
        <AlertBarTitle>Error</AlertBarTitle>
        <AlertBarSubtitle>{error}</AlertBarSubtitle>
      </AlertBarContent>
    </AlertBarContainer>,
    document.body,
  );
});
