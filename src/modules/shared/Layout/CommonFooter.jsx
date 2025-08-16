import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion'; // Animation library

const CommonFooter = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const socialLinks = [
    { name: 'GitHub', icon: <FaGithub size={24} />, url: 'https://github.com/Mostakim69' },
    { name: 'Facebook', icon: <FaFacebook size={24} />, url: 'https://www.facebook.com/MostakimHosennnn' },
    { name: 'Instagram', icon: <FaInstagram size={24} />, url: 'https://www.instagram.com/posterboy3369/#' },
    { name: 'Twitter', icon: <FaTwitter size={24} />, url: 'https://x.com/mostakim14467' },
    { name: 'YouTube', icon: <FaYoutube size={24} />, url: 'https://www.youtube.com/@PosterBoy3369' },
  ];

  const companyLinks = [
    { name: 'Home', path: '/' },
    { name: 'All Trips', path: '/all-trips' },
    { name: 'Community', path: '/community' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Dashboard', path: '/dashboard' },
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
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-gray-300 bg-gray-800 pt-10 px-6 md:px-10 lg:px-20 font-Outfit"
    >
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20">
        {/* Brand & Social */}
        <motion.div
          className="max-w-xs"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 120 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <img
              src="https://i.postimg.cc/mDZvzcKn/add5bd76e80a208f85d556937ebe8abe.jpg"
              alt="TourNest BD Logo"
              className="h-7 rounded-full"
            />
            <h2 className="font-bold text-xl text-white">TourNest BD</h2>
          </div>
          <p className="text-sm text-gray-400">
            Discover extraordinary places to stay, from boutique hotels to luxury villas and private islands.
          </p>
          <div className="flex items-center gap-3 mt-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow us on ${link.name}`}
                className="hover:text-white transition-colors duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Company Links */}
        <motion.nav
          aria-label="Company Links"
          className="flex flex-col"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 120 }}
        >
          <p className="text-lg font-semibold text-white">Company</p>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            {companyLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="hover:text-white transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.nav>

        {/* Newsletter */}
        <motion.div
          className="max-w-xs"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 120 }}
        >
          <p className="text-lg font-semibold text-white">Stay Updated</p>
          <p className="mt-3 text-sm text-gray-400">
            Subscribe to our newsletter for inspiration and special offers.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex items-center mt-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-700 text-white rounded-l border border-gray-600 h-10 px-3 w-full focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Your email"
            />
            <button
              type="submit"
              className="flex items-center justify-center bg-blue-600 h-10 w-10 rounded-r hover:bg-blue-500 transition-colors"
            >
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5m14 0-4 4m4-4-4-4" />
              </svg>
            </button>
          </form>
          {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
        </motion.div>
      </div>

      <hr className="border-gray-600 my-8" />

      {/* Copyright & Legal */}
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between text-sm">
        <p className="text-gray-400">
          © {new Date().getFullYear()}{' '}
          <a href="/" className="hover:text-white transition-colors">TourNest BD</a>. All rights reserved.
        </p>
        <nav aria-label="Legal Links">
          <ul className="flex items-center gap-4">
            {legalLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.url}
                  className="hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.footer>
  );
};

export default CommonFooter;
