'use client';

import { useState } from 'react';
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact-section" className="w-full py-20 bg-gray-50 dark:bg-gray-900 animate-fade-in">
      <div className="container">
        <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Contact Us
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Get in Touch
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Have questions? We'd love to hear from you. Send us a message
              and we'll respond as soon as possible.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <MapPinIcon className="h-6 w-6 text-primary" />
                <span className="text-gray-600 dark:text-gray-300">
                  736101 Gunjabari, Coochbehar, India
                </span>
              </div>
              
              <div className="flex items-center space-x-4">
                <PhoneIcon className="h-6 w-6 text-primary" />
                <span className="text-gray-600 dark:text-gray-300">
                  +91 8158979513
                </span>
              </div>
              
              <div className="flex items-center space-x-4">
                <EnvelopeIcon className="h-6 w-6 text-primary" />
                <span className="text-gray-600 dark:text-gray-300">
                      thakurpanchananbarma75@gmail.com
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
