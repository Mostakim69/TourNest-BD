import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CommonFooter = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const socialLinks = [
    {
      name: 'Instagram',
      icon: (
        <svg className="w-6 h-6 cursor-pointer" fill="currentColor" viewBox="0 0 24 24" aria-label="Instagram">
          <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM4.5 7.75A3.25 3.25 0 017.75 4.5h8.5a3.25 3.25 0 013.25 3.25v8.5a3.25 3.25 0 01-3.25 3.25h-8.5a3.25 3.25 0 01-3.25-3.25v-8.5zm9.5 1a4 4 0 11-4 4 4 4 0 014-4zm0 1.5a2.5 2.5 0 102.5 2.5 2.5 2.5 0 00-2.5-2.5zm3.5-.75a.75.75 0 11.75-.75.75.75 0 01-.75.75z" />
        </svg>
      ),
      url: 'https://instagram.com/tournestbd',
    },
    {
      name: 'Facebook',
      icon: (
        <svg className="w-6 h-6 cursor-pointer" fill="currentColor" viewBox="0 0 24 24" aria-label="Facebook">
          <path d="M13.5 9H15V6.5h-1.5c-1.933 0-3.5 1.567-3.5 3.5v1.5H8v3h2.5V21h3v-7.5H16l.5-3h-3z" />
        </svg>
      ),
      url: 'https://facebook.com/tournestbd',
    },
    {
      name: 'Twitter',
      icon: (
        <svg className="w-6 h-6 cursor-pointer" fill="currentColor" viewBox="0 0 24 24" aria-label="Twitter">
          <path d="M22 5.92a8.2 8.2 0 01-2.36.65A4.1 4.1 0 0021.4 4a8.27 8.27 0 01-2.6 1A4.14 4.14 0 0016 4a4.15 4.15 0 00-4.15 4.15c0 .32.04.64.1.94a11.75 11.75 0 01-8.52-4.32 4.14 4.14 0 001.29 5.54A4.1 4.1 0 013 10v.05a4.15 4.15 0 003.33 4.07 4.12 4.12 0 01-1.87.07 4.16 4.16 0 003.88 2.89A8.33 8.33 0 012 19.56a11.72 11.72 0 006.29 1.84c7.55 0 11.68-6.25 11.68-11.67 0-.18 0-.35-.01-.53A8.18 8.18 0 0022 5.92z" />
        </svg>
      ),
      url: 'https://twitter.com/tournestbd',
    },
    {
      name: 'LinkedIn',
      icon: (
        <svg className="w-6 h-6 cursor-pointer" fill="currentColor" viewBox="0 0 24 24" aria-label="LinkedIn">
          <path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.48c0 1.1.88 1.98 1.98 1.98h.02c1.1 0 1.98-.88 1.98-1.98C6.98 4.38 6.1 3.5 4.98 3.5zM3 8.75h3.96V21H3V8.75zm6.25 0h3.8v1.68h.05c.53-.98 1.82-2.02 3.75-2.02 4.01 0 4.75 2.64 4.75 6.07V21H17v-5.63c0-1.34-.03-3.07-1.88-3.07-1.88 0-2.17 1.47-2.17 2.98V21H9.25V8.75z" />
        </svg>
      ),
      url: 'https://linkedin.com/company/tournestbd',
    },
  ];

  const companyLinks = [
    { name: 'About', url: '/' },
    { name: 'Careers', url: '/' },
    { name: 'Press', url: '/' },
    { name: 'Blog', url: '/' },
    { name: 'Partners', url: '/' },
  ];

  const supportLinks = [
    { name: 'Help Center', url: '/' },
    { name: 'Safety Information', url: '/' },
    { name: 'Contact Us', url: '/' },
  ];

  const legalLinks = [
    { name: 'Privacy', url: '/' },
    { name: 'Terms', url: '/' },
  ];

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    // Simulate newsletter subscription API call
    console.log('Subscribing:', email);
    setEmail('');
    // Optionally, show a success message or integrate with an API
  };

  return (
    <footer className="text-gray-500 bg-gray-900 pt-8 px-6 md:px-8 lg:px-10 xl:px-20 font-Outfit">
      <div className="flex flex-wrap justify-between gap-12 md:gap-8 lg:gap-12">
        {/* Brand Section */}
        <div className="max-w-80">
          <div className="flex items-center gap-3 mb-4">
            <img
              src="https://i.postimg.cc/mDZvzcKn/add5bd76e80a208f85d556937ebe8abe.jpg"
              alt="TourNest BD Logo"
              className="h-6 rounded-full md:h-7"
            />
            <h2 className="font-bold text-xl text-white">TourNest BD</h2>
          </div>
          <p className="text-sm text-gray-300">
            Discover the world’s most extraordinary places to stay, from boutique hotels to luxury villas and private islands.
          </p>
          <div className="flex items-center gap-3 mt-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${link.name}`}
                className="hover:text-white transition-colors"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Company Links */}
        <nav aria-label="Company Links">
          <p className="text-lg font-semibold text-white">Company</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            {companyLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  className="hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Support Links */}
        <nav aria-label="Support Links">
          <p className="text-lg font-semibold text-white">Support</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            {supportLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  className="hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Newsletter Signup */}
        <div className="max-w-80">
          <p className="text-lg font-semibold text-white">Stay Updated</p>
          <p className="mt-3 text-sm text-gray-300">
            Subscribe to our newsletter for inspiration and special offers.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex items-center mt-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white rounded-l border border-gray-300 h-9 px-3 outline-none w-full focus:ring-2 focus:ring-blue-500"
              placeholder="Your email"
              aria-label="Email for newsletter"
            />
            <button
              type="submit"
              className="flex items-center justify-center bg-black h-9 w-9 rounded-r hover:bg-gray-800 transition-colors"
              aria-label="Subscribe to newsletter"
            >
              <svg
                className="w-4 h-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 12H5m14 0-4 4m4-4-4-4"
                />
              </svg>
            </button>
          </form>
          {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
        </div>
      </div>

      <hr className="border-gray-300 my-8" />

      {/* Copyright and Legal Links */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between py-5 text-sm">
        <p className="text-gray-300">
          © {new Date().getFullYear()} <a href="/" className="hover:text-white">TourNest BD</a>. All rights reserved.
        </p>
        <nav aria-label="Legal Links">
          <ul className="flex items-center gap-4">
            {legalLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  className="hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

CommonFooter.propTypes = {};

export default CommonFooter;