import { Component } from 'react'

export default class ErrorBoundary extends Component {
  state = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Application render error:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-white px-6 text-center text-slate-900">
          <h1 className="text-2xl font-bold">Something went wrong</h1>
          <p className="max-w-md text-slate-600">
            This page could not be displayed. Reload the page to try again.
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="rounded bg-[#005b94] px-4 py-2 font-semibold text-white hover:bg-[#004875]"
          >
            Reload page
          </button>
        </main>
      )
    }

    return this.props.children
  }
}