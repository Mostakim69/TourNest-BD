import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

const CommonFooter = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub size={24} />,
      url: 'https://github.com/Mostakim69',
    },
    {
      name: 'Facebook',
      icon: <FaFacebook size={24} />,
      url: 'https://www.facebook.com/MostakimHosennnn',
    },
    {
      name: 'Instagram',
      icon: <FaInstagram size={24} />,
      url: 'https://www.instagram.com/posterboy3369/#',
    },
    {
      name: 'Twitter',
      icon: <FaTwitter size={24} />,
      url: 'https://x.com/mostakim14467',
    },
    {
      name: 'YouTube',
      icon: <FaYoutube size={24} />,
      url: 'https://www.youtube.com/@PosterBoy3369',
    },
  ];

  const companyLinks = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'All Trips',
      path: '/all-trips',
    },
    {
      name: 'Community',
      path: '/community',
    },
    {
      name: 'About Us',
      path: '/about-us',
    },
    {
      name: 'Dashboard',
      path: '/dashboard',
    },
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
    setEmail('');
    // Simulate newsletter subscription API call
    // console.log('Subscribing:', email);
  };

  return (
    <footer className="text-gray-500 bg-gray-700 pt-8 px-6 md:px-8 lg:px-10 xl:px-20 font-Outfit">
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
                <Link
                  to={link.path} // Use 'to' instead of 'href' for react-router-dom
                  className="hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  {link.name}
                </Link>
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