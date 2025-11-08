import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './Input';

describe('Input', () => {
  it('renders correctly', () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  it('handles value changes', () => {
    const handleChange = vi.fn();
    render(<Input value="" onChange={handleChange} />);
    
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });
    
    expect(handleChange).toHaveBeenCalled();
  });

  it('applies error state', () => {
    render(<Input error="Error message" />);
    expect(screen.getByText('Error message')).toBeInTheDocument();
  });

  it('applies success state', () => {
    render(<Input success helperText="Success message" />);
    expect(screen.getByText('Success message')).toBeInTheDocument();
  });

  it('renders with label', () => {
    render(<Input label="Email" />);
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  it('respects disabled state', () => {
    render(<Input disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('respects required attribute', () => {
    render(<Input required />);
    expect(screen.getByRole('textbox')).toBeRequired();
  });

  it('applies different variants', () => {
    const { rerender } = render(<Input variant="outlined" />);
    expect(screen.getByRole('textbox')).toHaveClass('border-2');

    rerender(<Input variant="filled" />);
    expect(screen.getByRole('textbox')).toHaveClass('bg-background-secondary');
  });

  it('applies different sizes', () => {
    const { rerender } = render(<Input size="small" />);
    expect(screen.getByRole('textbox')).toHaveClass('text-sm');

    rerender(<Input size="large" />);
    expect(screen.getByRole('textbox')).toHaveClass('text-lg');
  });

  it('forwards HTML input attributes', () => {
    render(<Input type="email" name="email" autoComplete="email" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('type', 'email');
    expect(input).toHaveAttribute('name', 'email');
    expect(input).toHaveAttribute('autocomplete', 'email');
  });
});

