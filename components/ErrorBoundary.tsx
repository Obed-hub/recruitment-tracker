import React, { Component, ReactNode, ErrorInfo } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    (this as any).state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('[ErrorBoundary] Uncaught application error:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  handleGoHome = () => {
    window.location.href = '/';
  };

  render() {
    const state = (this as any).state as State;
    const props = (this as any).props as Props;

    if (state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-4">
          <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center space-y-4 shadow-2xl">
            <div className="w-16 h-16 bg-red-500/20 text-red-400 rounded-full flex items-center justify-center mx-auto text-2xl font-black">
              ⚠️
            </div>
            <h2 className="text-xl font-bold text-white">Something went wrong</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              We encountered an unexpected issue while loading this page. This is usually resolved by refreshing to fetch the latest portal updates.
            </p>
            {state.error && (
              <div className="p-3 bg-black/50 rounded-lg text-[11px] text-red-300 font-mono text-left overflow-auto max-h-32">
                {state.error.message || String(state.error)}
              </div>
            )}
            <div className="flex gap-2 pt-2">
              <button
                onClick={this.handleReload}
                className="flex-1 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-xs transition-colors"
              >
                Refresh Page
              </button>
              <button
                onClick={this.handleGoHome}
                className="flex-1 py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-xs transition-colors border border-slate-700"
              >
                Go to Homepage
              </button>
            </div>
          </div>
        </div>
      );
    }

    return props.children;
  }
}

export default ErrorBoundary;
