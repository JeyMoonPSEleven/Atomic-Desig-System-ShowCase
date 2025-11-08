import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Hero } from './Hero';

describe('Hero', () => {
  it('renders title correctly', () => {
    render(<Hero title="Welcome" />);
    expect(screen.getByText('Welcome')).toBeInTheDocument();
  });

  it('renders subtitle when provided', () => {
    render(<Hero title="Welcome" subtitle="Get Started" />);
    expect(screen.getByText('Get Started')).toBeInTheDocument();
  });

  it('renders description when provided', () => {
    render(<Hero title="Welcome" description="This is a description" />);
    expect(screen.getByText('This is a description')).toBeInTheDocument();
  });

  it('renders primary button', () => {
    render(
      <Hero
        title="Welcome"
        primaryButton={{ text: 'Get Started', href: '/start' }}
      />
    );
    expect(screen.getByText('Get Started')).toBeInTheDocument();
  });

  it('renders secondary button', () => {
    render(
      <Hero
        title="Welcome"
        secondaryButton={{ text: 'Learn More', href: '/learn' }}
      />
    );
    expect(screen.getByText('Learn More')).toBeInTheDocument();
  });

  it('handles button onClick', () => {
    const handleClick = vi.fn();
    render(
      <Hero
        title="Welcome"
        primaryButton={{ text: 'Click Me', onClick: handleClick }}
      />
    );
    
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders stats when provided', () => {
    const stats = [
      { value: '1000+', label: 'Users' },
      { value: '50+', label: 'Projects' },
      { value: '99%', label: 'Satisfaction' },
    ];
    
    render(<Hero title="Welcome" stats={stats} />);
    expect(screen.getByText('1000+')).toBeInTheDocument();
    expect(screen.getByText('Users')).toBeInTheDocument();
    expect(screen.getByText('50+')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
  });

  it('renders image when provided', () => {
    render(
      <Hero
        title="Welcome"
        image={{ src: '/test.jpg', alt: 'Test Image' }}
      />
    );
    const image = screen.getByAltText('Test Image');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/test.jpg');
  });

  it('applies different variants', () => {
    const { rerender } = render(<Hero title="Welcome" variant="default" />);
    expect(screen.getByRole('region')).toHaveClass('py-xl');

    rerender(<Hero title="Welcome" variant="centered" />);
    expect(screen.getByRole('region')).toHaveClass('text-center');

    rerender(<Hero title="Welcome" variant="full" />);
    expect(screen.getByRole('region')).toHaveClass('min-h-screen');
  });

  it('renders background image with overlay', () => {
    render(<Hero title="Welcome" backgroundImage="/bg.jpg" />);
    const section = screen.getByRole('region');
    expect(section.querySelector('img')).toHaveAttribute('src', '/bg.jpg');
  });
});

