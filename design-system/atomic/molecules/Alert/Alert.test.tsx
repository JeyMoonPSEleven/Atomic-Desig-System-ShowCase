import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Alert } from './Alert';

describe('Alert', () => {
  it('renders message correctly', () => {
    render(<Alert message="Test alert" />);
    expect(screen.getByText('Test alert')).toBeInTheDocument();
  });

  it('renders with title', () => {
    render(<Alert title="Alert Title" message="Alert message" />);
    expect(screen.getByText('Alert Title')).toBeInTheDocument();
    expect(screen.getByText('Alert message')).toBeInTheDocument();
  });

  it('applies success variant', () => {
    render(<Alert variant="success" message="Success" />);
    const alert = screen.getByRole('alert');
    expect(alert).toHaveClass('border-success');
  });

  it('applies danger variant', () => {
    render(<Alert variant="danger" message="Danger" />);
    const alert = screen.getByRole('alert');
    expect(alert).toHaveClass('border-danger');
  });

  it('applies warning variant', () => {
    render(<Alert variant="warning" message="Warning" />);
    const alert = screen.getByRole('alert');
    expect(alert).toHaveClass('border-warning');
  });

  it('applies info variant', () => {
    render(<Alert variant="info" message="Info" />);
    const alert = screen.getByRole('alert');
    expect(alert).toHaveClass('border-info');
  });

  it('shows close button when dismissible', () => {
    render(<Alert message="Dismissible" dismissible />);
    expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();
  });

  it('calls onDismiss when close button clicked', () => {
    const handleDismiss = vi.fn();
    render(<Alert message="Test" dismissible onDismiss={handleDismiss} />);
    
    fireEvent.click(screen.getByRole('button', { name: /close/i }));
    expect(handleDismiss).toHaveBeenCalledTimes(1);
  });

  it('auto-dismisses after timeout', async () => {
    const handleDismiss = vi.fn();
    render(<Alert message="Auto dismiss" dismissible autoDismiss autoDismissTimeout={100} onDismiss={handleDismiss} />);
    
    await waitFor(() => {
      expect(handleDismiss).toHaveBeenCalled();
    }, { timeout: 200 });
  });

  it('applies different sizes', () => {
    const { rerender } = render(<Alert message="Small" size="small" />);
    expect(screen.getByRole('alert')).toHaveClass('text-sm');

    rerender(<Alert message="Large" size="large" />);
    expect(screen.getByRole('alert')).toHaveClass('text-lg');
  });
});

