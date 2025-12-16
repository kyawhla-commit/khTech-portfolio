import { useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";
import { downloadCV } from "../utils/downloadCV";

export const Navbar = ({menuOpen, setMenuOpen}) => {
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
    }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-white/10 shadow-lg transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-gray-900 dark:text-white transition-colors">
            kyawHla <span className="text-blue-500">.tech</span>
          </a>
          
          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 group"
              aria-label="Toggle theme"
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <FiMoon className="w-5 h-5 text-gray-700 dark:text-gray-300 group-hover:rotate-12 transition-transform duration-300" />
              ) : (
                <FiSun className="w-5 h-5 text-yellow-500 group-hover:rotate-90 transition-transform duration-300" />
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <div 
              className="w-7 h-5 relative cursor-pointer z-40 md:hidden text-gray-900 dark:text-white" 
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              &#9776;
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Projects
              </a>
              <a
                href="#certificates"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Certificate
              </a>
              <a
                href="#contact"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
              <button
                onClick={downloadCV}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

