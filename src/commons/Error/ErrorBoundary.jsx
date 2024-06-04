import React, { Component } from "react";
import { Table } from "../../components";

//
// Error boundary for catching errors
//
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errors: [] };
    this.componentDidCatch = this.componentDidCatch.bind(this);
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState(prevState => ({
      errors: [...prevState.errors, { error, errorInfo }, { error, errorInfo }]
    }));
  }

  handleGoBack = () => {
    this.setState({ hasError: false, errors: [] });
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h1>Something went wrong. Please try again later.</h1>
          {this.state.errors.map((error, index) => (
            <div key={index}>
              <p>{error.error.toString()}</p>
              <details style={{ whiteSpace: 'pre-wrap' }}>
                {error.errorInfo.componentStack}
              </details>
            </div>
          ))}
          <Table initialData={this.state.errors} initialItemsPerPage={10} initialTableName="Errors" initialTableType="Developer"/>
          <button onClick={this.handleGoBack}>Go Back</button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
