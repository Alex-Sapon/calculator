import React from 'react';

import {
  ErrorSubtitle,
  ErrorTitle,
  ErrorWrapper,
} from '@components/errorBoundary/styles';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: '',
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { children } = this.props;
    const { hasError, error } = this.state;

    if (hasError) {
      return (
        <ErrorWrapper>
          <ErrorTitle>Something went wrong!</ErrorTitle>
          <ErrorSubtitle>Error reason: {error.toString()}</ErrorSubtitle>
        </ErrorWrapper>
      );
    }

    return children;
  }
}
