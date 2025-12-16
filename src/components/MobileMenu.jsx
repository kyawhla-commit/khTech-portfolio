import { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import { FiSun, FiMoon } from 'react-icons/fi';
import { downloadCV } from '../utils/downloadCV';

export const MobileMenu = ({ 
  menuOpen, 
  setMenuOpen,
  onMenuItemClick 
}) => {
  const { theme, toggleTheme } = useTheme();
  const menuRef = useRef(null);
  const closeButtonRef = useRef(null);
  const firstMenuItemRef = useRef(null);
  // refs for all menu items so we can focus the one matching the current section
  const menuItemRefs = useRef([]);

  // Close menu on Escape key press
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [menuOpen, setMenuOpen]);

  // Trap focus within menu when open
  useEffect(() => {
    if (menuOpen && menuRef.current) {
      // When the menu opens, try to focus the link that corresponds to the
      // currently visible/active section. We use the URL hash as the source of
      // truth (e.g. #about). If there is no hash or no matching link, fall
      // back to the first menu item.
      const hash = (window.location.hash || '').replace('#', '');

      let target = null;
      if (hash) {
        target = menuItemRefs.current.find((el) => {
          if (!el) return false;
          // Prefer data-section match, fallback to href match
          const section = el.dataset.section;
          if (section === hash) return true;
          const href = el.getAttribute('href') || '';
          return href.endsWith(`#${hash}`);
        });
      }

      (target ?? firstMenuItemRef.current)?.focus();
    }
  }, [menuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const handleMenuItemClick = (sectionId) => {
    setMenuOpen(false);
    onMenuItemClick?.(sectionId);
  };

  const handleBackdropClick = (event) => {
    if (event.target === menuRef.current) {
      setMenuOpen(false);
    }
  };

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div
      ref={menuRef}
      onClick={handleBackdropClick}
      className={`fixed inset-0 z-50 transition-all duration-300 ease-in-out ${
        menuOpen
          ? 'bg-black/80 backdrop-blur-sm opacity-100 pointer-events-auto'
          : 'bg-transparent opacity-0 pointer-events-none'
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation menu"
      aria-hidden={!menuOpen}
    >
      {/* Close button */}
      <button
        ref={closeButtonRef}
        onClick={() => setMenuOpen(false)}
        className="absolute right-6 top-6 text-white text-3xl focus:outline-none cursor-pointer hover:text-gray-300 transition-colors duration-200 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded"
        aria-label="Close menu"
      >
        &times;
      </button>

      {/* Menu content */}
      <nav 
        className="flex flex-col items-center justify-center h-full"
        aria-label="Main navigation"
      >
        {menuItems.map((item, index) => (
          <a
            key={item.id}
            // store each menu item ref so we can focus it later
            ref={(el) => {
              menuItemRefs.current[index] = el;
              if (index === 0) firstMenuItemRef.current = el;
            }}
            data-section={item.id}
            href={`#${item.id}`}
            onClick={() => handleMenuItemClick(item.id)}
            className={`text-2xl font-semibold text-white my-4 transform transition-all duration-300 hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded px-4 py-2 ${
              menuOpen
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-5'
            }`}
            style={{
              transitionDelay: menuOpen ? `${index * 100}ms` : '0ms'
            }}
          >
            {item.label}
          </a>
        ))}

        {/* Download CV Button */}
        <button
          onClick={downloadCV}
          className={`mt-6 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 cursor-pointer ${
            menuOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-5'
          }`}
          style={{
            transitionDelay: menuOpen ? `${menuItems.length * 100}ms` : '0ms'
          }}
        >
          Download CV
        </button>

        {/* Theme Toggle in Mobile Menu */}
        <button
          onClick={toggleTheme}
          className={`mt-4 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 group ${
            menuOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-5'
          }`}
          style={{
            transitionDelay: menuOpen ? `${(menuItems.length + 1) * 100}ms` : '0ms'
          }}
          aria-label="Toggle theme"
        >
          {theme === 'light' ? (
            <FiMoon className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
          ) : (
            <FiSun className="w-6 h-6 text-yellow-400 group-hover:rotate-90 transition-transform duration-300" />
          )}
        </button>
      </nav>
    </div>
  );
};

// Optional: Add prop types for better development experience
MobileMenu.defaultProps = {
  onMenuItemClick: () => {}
};