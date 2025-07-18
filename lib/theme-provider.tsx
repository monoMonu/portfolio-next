'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
   theme: Theme;
   resolvedTheme: 'light' | 'dark';
   setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
   const context = useContext(ThemeContext);
   if (!context) throw new Error('useTheme must be used within ThemeProvider');
   return context;
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
   const [theme, setThemeState] = useState<Theme>('system');
   const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

   const applyTheme = (themeToApply: Theme) => {
      const root = window.document.documentElement;

      if (themeToApply === 'system') {
         const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
         root.classList.remove('light', 'dark');
         root.classList.add(isDark ? 'dark' : 'light');
         setResolvedTheme(isDark ? 'dark' : 'light');
      } else {
         root.classList.remove('light', 'dark');
         root.classList.add(themeToApply);
         setResolvedTheme(themeToApply);
      }
   };

   const setTheme = (newTheme: Theme) => {
      localStorage.setItem('theme', newTheme);
      setThemeState(newTheme);
      applyTheme(newTheme);
   };

   useEffect(() => {
      const stored = localStorage.getItem('theme') as Theme | null;
      const initialTheme = stored || 'system';
      setThemeState(initialTheme);
      applyTheme(initialTheme);

      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => {
         if (theme === 'system') {
            applyTheme('system');
         }
      };

      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
   }, []);

   return (
      <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
         {children}
      </ThemeContext.Provider>
   );
};
