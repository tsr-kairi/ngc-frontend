import { Component, ErrorInfo, ReactNode } from 'react';

type ErrorBoundaryProps = {
  // eslint-disable-next-line react/require-default-props
  fallback?: ReactNode;
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can log the error to an error reporting service here
    // eslint-disable-next-line no-console
    console.error('Error:', error);
    // eslint-disable-next-line no-console
    console.error('Error Info:', errorInfo);
    // Optionally, you can set a flag to render a fallback UI
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const { fallback, children } = this.props;
    if (hasError) {
      // Render your custom error UI or fallback component
      return fallback || null;
    }
    // Render the children components if there is no error
    return children;
  }
}

export default ErrorBoundary;
