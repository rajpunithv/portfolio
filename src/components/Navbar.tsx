import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeContext';

function Navbar() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const profilePicUrl = "https://i.imgur.com/KcaTQUZ.jpeg";

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg transition-colors duration-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3">
            <img src={profilePicUrl} alt="Rajpunith" className="w-10 h-10 rounded-full" />
            <span className="text-xl font-semibold text-gray-900 dark:text-white">Rajpunith</span>
          </Link>
          <div className="flex items-center">
            <div className="flex items-center space-x-8 mr-8">
              <NavLink to="/projects" current={location.pathname}>Projects</NavLink>
              <NavLink to="/certifications" current={location.pathname}>Certifications</NavLink>
              <NavLink to="/skills" current={location.pathname}>Skills</NavLink>
              <NavLink to="/about" current={location.pathname}>About</NavLink>
              <NavLink to="/contact" current={location.pathname}>Contact</NavLink>
            </div>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              ) : (
                <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, children, current }: { to: string; children: React.ReactNode; current: string }) {
  return (
    <Link
      to={to}
      className={`${
        current === to
          ? 'text-blue-600 dark:text-blue-400 border-b-2 border-blue-600 dark:border-blue-400'
          : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
      } transition-colors duration-200 py-2`}
    >
      {children}
    </Link>
  );
}

export default Navbar;