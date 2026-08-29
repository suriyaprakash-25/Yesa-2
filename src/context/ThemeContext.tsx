/* oxlint-disable react/only-export-components */
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = 'yesa-theme';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    // 1. Check localStorage first
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem(STORAGE_KEY) as Theme | null;
      if (savedTheme === 'dark' || savedTheme === 'light') {
        return savedTheme;
      }
      // 2. Check system preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
      }
    }
    return 'dark';
  });

  const applyTheme = useCallback((newTheme: Theme) => {
    if (typeof window === 'undefined') return;

    const root = document.documentElement;
    const updateThemeDom = () => {
      root.setAttribute('data-theme', newTheme);
      // Also toggle Tailwind's dark class for maximum compatibility
      if (newTheme === 'dark') {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
      localStorage.setItem(STORAGE_KEY, newTheme);
    };

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Use native View Transitions API if supported for ultra-smooth 60fps cross-fade
    if (!prefersReducedMotion && 'startViewTransition' in document) {
      (document as unknown as { startViewTransition: (cb: () => void) => void }).startViewTransition(() => {
        updateThemeDom();
      });
    } else {
      updateThemeDom();
    }
  }, []);

  useEffect(() => {
    applyTheme(theme);
  }, [theme, applyTheme]);

  // Listen to system changes if user hasn't explicitly set localStorage
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    const handleChange = (e: MediaQueryListEvent) => {
      const hasSavedTheme = localStorage.getItem(STORAGE_KEY);
      if (!hasSavedTheme) {
        const nextTheme = e.matches ? 'light' : 'dark';
        setThemeState(nextTheme);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
