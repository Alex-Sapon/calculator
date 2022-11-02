import React from 'react';
import { ErrorSubtitle, ErrorTitle, ErrorWrapper } from '@components/errorBoundary/styles';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      error: ''
    };
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error })
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorWrapper>
          <ErrorTitle>Something went wrong!</ErrorTitle>
          <ErrorSubtitle>Error reason: {this.state.error.toString()}</ErrorSubtitle>
        </ErrorWrapper>
      )
    }

    return this.props.children;
  }
}
