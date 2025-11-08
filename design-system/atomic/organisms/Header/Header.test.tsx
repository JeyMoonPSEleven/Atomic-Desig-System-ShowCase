import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from './Header';

describe('Header', () => {
  const mockNavigation = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  it('renders logo text', () => {
    render(<Header logoText="Test App" navigation={mockNavigation} />);
    expect(screen.getByText('Test App')).toBeInTheDocument();
  });

  it('renders navigation items', () => {
    render(<Header navigation={mockNavigation} />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('renders CTA button when provided', () => {
    render(<Header navigation={mockNavigation} ctaText="Sign Up" ctaHref="/signup" />);
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
  });

  it('renders phone number when provided', () => {
    render(<Header navigation={mockNavigation} phone="+1234567890" />);
    expect(screen.getByText('+1234567890')).toBeInTheDocument();
  });

  it('applies different variants', () => {
    const { rerender } = render(<Header navigation={mockNavigation} variant="default" />);
    expect(screen.getByRole('banner')).toHaveClass('py-md');

    rerender(<Header navigation={mockNavigation} variant="compact" />);
    expect(screen.getByRole('banner')).toHaveClass('py-sm');
  });

  it('shows mobile menu button', () => {
    render(<Header navigation={mockNavigation} />);
    const menuButton = screen.getByRole('button', { name: /toggle menu/i });
    expect(menuButton).toBeInTheDocument();
  });

  it('toggles mobile menu on button click', () => {
    render(<Header navigation={mockNavigation} />);
    const menuButton = screen.getByRole('button', { name: /toggle menu/i });
    
    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    
    fireEvent.click(menuButton);
    expect(menuButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('calls onMenuToggle callback', () => {
    const handleMenuToggle = vi.fn();
    render(<Header navigation={mockNavigation} onMenuToggle={handleMenuToggle} />);
    
    const menuButton = screen.getByRole('button', { name: /toggle menu/i });
    fireEvent.click(menuButton);
    
    expect(handleMenuToggle).toHaveBeenCalledTimes(1);
  });
});

