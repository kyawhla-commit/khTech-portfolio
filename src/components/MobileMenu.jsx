import { useEffect, useRef } from 'react';

export const MobileMenu = ({ 
  menuOpen, 
  setMenuOpen,
  onMenuItemClick 
}) => {
  const menuRef = useRef(null);
  const closeButtonRef = useRef(null);
  const firstMenuItemRef = useRef(null);

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
      // Focus first menu item when menu opens
      firstMenuItemRef.current?.focus();
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
            ref={index === 0 ? firstMenuItemRef : null}
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
      </nav>
    </div>
  );
};

// Optional: Add prop types for better development experience
MobileMenu.defaultProps = {
  onMenuItemClick: () => {}
};