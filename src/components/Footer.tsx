'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/vercel.svg"
                alt="Logo"
                width={24}
                height={24}
                className="dark:invert"
              />
              <span className="font-semibold text-xl">Panchanan Smriti Chhatrabas</span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400">
              Making hostel life easier and more connected.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://x.com/MithunBarman321" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                Twitter
              </a>
              <a href="https://www.facebook.com/profile.php?id=100055664015148" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                Facebook
              </a>
              <a href="https://www.instagram.com/mithun45___/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white">
                Instagram
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Panchanan Smriti Chhatrabas. All rights reserved. and create by mithun barman a hostel border
          </p>
        </div>
      </div>
    </footer>
  );
}