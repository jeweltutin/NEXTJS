'use client';
import { useState } from 'react';
import { FaHome, FaUserAlt, FaBriefcase, FaBlog, FaFileAlt, FaEnvelope } from 'react-icons/fa';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import Link from 'next/link';
import { useMode } from '../context/ModeContext';
import clsx from 'clsx';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { isDarkMode, toggleTheme } = useMode();

  //console.log(isDarkMode, "Dark", isDarkMode);

  const navItems = [
    { name: 'Home', href: '/', icon: <FaHome /> },
    { name: 'About', href: '/about', icon: <FaUserAlt /> },
    { name: 'Resume', href: '/resume', icon: <FaFileAlt /> },
    { name: 'Works', href: '/works', icon: <FaBriefcase /> },
    { name: 'Blogs', href: '/blogs', icon: <FaBlog /> },
    { name: 'Contact', href: '/contact', icon: <FaEnvelope /> },
  ];

  return (
    <header className="py-8">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-bold text-pink-500">
          <Link href={"/"}>
            <img src="/images/logo.png" alt="logo" className="rounded-lg shadow-lg w-full object-cover" />
          </Link>
        </div>

        <div className="flex items-end">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-4">
            {navItems.map((item, index) => (
              <a key={index} href={item.href} className={clsx("flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white dark:hover:bg-gray-700 dark:hover:text-white transition-all duration-200", { "bg-white text-gray-700": !isDarkMode, "dark:bg-[#212425] dark:text-white": isDarkMode })}>
                {item.icon}
                <span>{item.name}</span>
              </a>
            ))}
          </nav>

          {/* Theme Toggle Button */}
          <button onClick={toggleTheme} className="ml-4 text-gray-700 dark:text-gray-300 p-2 rounded-full bg-pink-200 hover:bg-pink-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all">
            {isDarkMode ? <BsSunFill className="text-yellow-300" /> : <BsMoonFill />}
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="ml-4 md:hidden text-gray-700 dark:text-gray-300 p-2 rounded-full bg-pink-200 hover:bg-pink-300 dark:bg-gray-700 dark:hover:bg-gray-600 transition-all">
          {isMobileMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <nav className={clsx("md:hidden absolute top-20 left-0 w-full shadow-lg z-50 transition-all duration-300", { "bg-white text-black" : !isDarkMode, "dark:bg-gray-800" : isDarkMode })}>
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={clsx("flex items-center space-x-2 px-4 py-3 border-b border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:bg-pink-200 dark:hover:bg-gray-700 hover:text-pink-600 dark:hover:text-pink-400 transition-all", { "bg-white dark:text-gray-700" : !isDarkMode, "bg-black": isDarkMode })}
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
            >
              {item.icon}
              <span>{item.name}</span>
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
