import { describe, it, expect, vi, beforeAll } from 'vitest';
import { render, screen } from '@testing-library/react';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorBoundary from '../components/ErrorBoundary';

// Mock window.scrollTo
beforeAll(() => {
  window.scrollTo = vi.fn();
});

describe('LoadingSpinner Component', () => {
  it('renders accessible loading state', () => {
    render(<LoadingSpinner />);
    const spinner = screen.getByRole('status');
    expect(spinner).toBeInTheDocument();
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });
});

describe('ErrorBoundary Component', () => {
  it('renders children when there is no error', () => {
    render(
      <ErrorBoundary>
        <div>Safe Content</div>
      </ErrorBoundary>
    );
    expect(screen.getByText('Safe Content')).toBeInTheDocument();
  });

  it('catches render errors and renders fallback UI', () => {
    // Suppress console.error for intentional throw
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    const ProblemComponent = () => {
      throw new Error('Test crash');
    };

    render(
      <ErrorBoundary>
        <ProblemComponent />
      </ErrorBoundary>
    );

    expect(screen.getByText(/Something went wrong/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Reload page/i })).toBeInTheDocument();
    spy.mockRestore();
  });
});
