import React from 'react';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '40px',
          color: '#ff4d4f',
          backgroundColor: '#1f1315',
          minHeight: '100vh',
          fontFamily: 'monospace',
          zIndex: 99999,
          position: 'relative'
        }}>
          <h1 style={{ fontSize: '24px', marginBottom: '20px', color: '#ff7875' }}>
            Application Error Caught by Boundary
          </h1>
          <div style={{ 
            backgroundColor: '#2a1215', 
            padding: '20px', 
            borderRadius: '8px',
            border: '1px solid #5c2223',
            marginBottom: '20px',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-all'
          }}>
            <strong>{this.state.error?.name}: {this.state.error?.message}</strong>
            <br />
            {this.state.error?.stack}
          </div>
          {this.state.errorInfo && (
            <div style={{
              backgroundColor: '#2a1215',
              padding: '20px',
              borderRadius: '8px',
              border: '1px solid #5c2223',
              whiteSpace: 'pre-wrap'
            }}>
              <strong>Component Stack:</strong>
              <br />
              {this.state.errorInfo.componentStack}
            </div>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}
