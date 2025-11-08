import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  it('renders children correctly', () => {
    render(<Card>Card Content</Card>);
    expect(screen.getByText('Card Content')).toBeInTheDocument();
  });

  it('renders with header', () => {
    render(
      <Card header={<div>Card Header</div>}>
        Content
      </Card>
    );
    expect(screen.getByText('Card Header')).toBeInTheDocument();
  });

  it('renders with footer', () => {
    render(
      <Card footer={<div>Card Footer</div>}>
        Content
      </Card>
    );
    expect(screen.getByText('Card Footer')).toBeInTheDocument();
  });

  it('applies different variants', () => {
    const { rerender } = render(<Card variant="elevated">Elevated</Card>);
    expect(screen.getByText('Elevated').parentElement).toHaveClass('shadow-lg');

    rerender(<Card variant="outlined">Outlined</Card>);
    expect(screen.getByText('Outlined').parentElement).toHaveClass('border-2');
  });

  it('applies different padding sizes', () => {
    const { rerender } = render(<Card padding="sm">Small</Card>);
    expect(screen.getByText('Small').parentElement).toHaveClass('p-sm');

    rerender(<Card padding="lg">Large</Card>);
    expect(screen.getByText('Large').parentElement).toHaveClass('p-lg');
  });

  it('handles onClick when clickable', () => {
    const handleClick = vi.fn();
    render(<Card onClick={handleClick}>Clickable Card</Card>);
    
    fireEvent.click(screen.getByText('Clickable Card'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies hover effects when clickable', () => {
    render(<Card onClick={() => {}}>Hover Card</Card>);
    expect(screen.getByText('Hover Card').parentElement).toHaveClass('cursor-pointer');
  });
});

