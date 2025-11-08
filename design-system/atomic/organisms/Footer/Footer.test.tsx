import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from './Footer';

describe('Footer', () => {
  const mockLinks = [
    {
      title: 'Products',
      links: [
        { label: 'Product 1', href: '/product-1' },
        { label: 'Product 2', href: '/product-2' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', href: '/about' },
        { label: 'Contact', href: '/contact' },
      ],
    },
  ];

  const mockContact = {
    phone: '+1234567890',
    email: 'test@example.com',
    address: '123 Test St',
  };

  const mockSocial = {
    facebook: 'https://facebook.com/test',
    twitter: 'https://twitter.com/test',
    linkedin: 'https://linkedin.com/company/test',
  };

  it('renders logo text', () => {
    render(<Footer logoText="Test Company" />);
    expect(screen.getAllByText('Test Company')[0]).toBeInTheDocument();
  });

  it('renders description', () => {
    render(<Footer description="Test description" />);
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('renders link sections', () => {
    render(<Footer links={mockLinks} />);
    expect(screen.getByText('Products')).toBeInTheDocument();
    expect(screen.getByText('Company')).toBeInTheDocument();
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  it('renders contact information', () => {
    render(<Footer contact={mockContact} />);
    expect(screen.getByText('+1234567890')).toBeInTheDocument();
    expect(screen.getByText('test@example.com')).toBeInTheDocument();
    expect(screen.getByText('123 Test St')).toBeInTheDocument();
  });

  it('renders social links', () => {
    render(<Footer social={mockSocial} />);
    const links = screen.getAllByRole('link');
    const socialLinks = links.filter(link => 
      link.getAttribute('href')?.includes('facebook') ||
      link.getAttribute('href')?.includes('twitter') ||
      link.getAttribute('href')?.includes('linkedin')
    );
    expect(socialLinks.length).toBeGreaterThan(0);
  });

  it('renders copyright text', () => {
    const currentYear = new Date().getFullYear();
    render(<Footer />);
    expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument();
  });

  it('renders legal links', () => {
    const legal = [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
    ];
    render(<Footer legal={legal} />);
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    expect(screen.getByText('Terms of Service')).toBeInTheDocument();
  });

  it('applies different variants', () => {
    const { rerender } = render(<Footer variant="default" />);
    expect(screen.getByRole('contentinfo')).toHaveClass('py-xl');

    rerender(<Footer variant="compact" />);
    expect(screen.getByRole('contentinfo')).toHaveClass('py-lg');
  });
});

