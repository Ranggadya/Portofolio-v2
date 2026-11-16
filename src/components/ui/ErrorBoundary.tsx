import { Component, type ErrorInfo, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    if (import.meta.env.DEV) {
      console.error('Application render boundary caught error:', error, info);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-surface px-6 text-center text-fg">
          <p className="font-mono text-xs uppercase tracking-widest text-soft">
            Runtime Recovery
          </p>
          <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
            Something went wrong while rendering this view.
          </h1>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-6 inline-flex min-h-[44px] items-center rounded-full bg-fg px-6 py-2 font-mono text-xs font-semibold uppercase tracking-wider text-surface transition-opacity hover:opacity-85"
          >
            Reload Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
