'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '#about' },
  { name: 'Our Achievements', href: '#achievements' },
  { name: 'Our Publications', href: '#publications' },
  { name: 'Learn', href: '#learn' },
  { name: 'Team', href: '#team' },
  { name: 'Contact Us', href: '#contact' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (href?.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        setMobileMenuOpen(false); // Close menu first
        setTimeout(() => { // Add delay for smooth transition
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else if (href === '/') {
      setMobileMenuOpen(false);
    }
  };

  // Add scroll lock when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed w-full bg-[#000033]/95 backdrop-blur supports-[backdrop-filter]:bg-[#000033]/60 z-50">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Ophtha Innovations</span>
            <Image
              className="h-12 w-auto"
              src="https://i.ibb.co/pB6bGWBm/Whats-App-Image-2024-10-31-at-07-58-49-d1b9d4a1-3.jpg"
              alt="Ophtha Logo"
              width={180}
              height={48}
              priority
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-white hover:text-[#1ED4D4] transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* Desktop Try Now button */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="http://aes.ophtha.health/#/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-[#1ED4D4] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#17B8B8] transition-colors"
          >
            Try Now
          </a>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed inset-0 top-20 z-40 bg-[#000033] transform transition-transform duration-300 ease-in-out lg:hidden',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="px-6 py-6">
          <div className="flex flex-col space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-base font-semibold text-white hover:text-[#1ED4D4] transition-colors py-4 border-b border-gray-800"
                onClick={handleMobileMenuClick}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <a
                href="http://aes.ophtha.health/#/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center rounded-md bg-[#1ED4D4] px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-[#17B8B8] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Try Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}