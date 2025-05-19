'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from '@/providers/ThemeProvider';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 w-full bg-white dark:bg-black border-b border-gray-200 dark:border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src={theme === 'dark' ? '/vercel-light.svg' : '/vercel.svg'}
                alt="Logo"
                width={24}
                height={24}
              />
              <span className="font-semibold text-xl dark:text-white">PSC</span>
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <Link 
              href="/about"
              className="text-gray-900 dark:text-gray-100 hover:text-black dark:hover:text-white transition-colors"
            >
              About
            </Link>
            <button 
              onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-gray-900 dark:text-gray-100 hover:text-black dark:hover:text-white transition-colors"
            >
              Contact
            </button>
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-900 dark:text-gray-100 hover:text-black dark:hover:text-white transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button>
            <Link 
              href="/login"
              className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-md hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}