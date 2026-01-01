import { createContext, useContext, useEffect, useState, useRef } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const isInitialMount = useRef(true);
  
  const [theme, setTheme] = useState(() => {
    // Check if we're in browser environment
    if (typeof window === 'undefined') return 'light';
    
    // Disable transitions on initial load
    document.documentElement.classList.add('theme-transition-disabled');
    
    // Check localStorage first
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark')) {
      return savedTheme;
    }
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
    
    // Enable transitions after initial mount
    if (isInitialMount.current) {
      isInitialMount.current = false;
      // Small delay to ensure initial theme is applied before enabling transitions
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          root.classList.remove('theme-transition-disabled');
        });
      });
    }
  }, [theme]);

  const toggleTheme = () => {
    const root = document.documentElement;
    
    // Add transitioning class for smooth animation
    root.classList.add('theme-transitioning');
    
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    
    // Remove transitioning class after animation completes
    setTimeout(() => {
      root.classList.remove('theme-transitioning');
    }, 450);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
