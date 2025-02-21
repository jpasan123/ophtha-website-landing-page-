'use client';

import { useState } from 'react';
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
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/try-now"
            className="rounded-md bg-[#1ED4D4] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#17B8B8] transition-colors"
          >
            Try Now
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'lg:hidden',
          mobileMenuOpen ? 'fixed inset-0 top-20 z-50 bg-[#000033]/95 backdrop-blur' : 'hidden'
        )}
      >
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex flex-col gap-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-semibold leading-7 text-white hover:text-[#1ED4D4] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-4 pt-4 border-t border-gray-700">
              <Link
                href="/try-now"
                className="rounded-md bg-[#1ED4D4] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#17B8B8] transition-colors w-full inline-block text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Try Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}