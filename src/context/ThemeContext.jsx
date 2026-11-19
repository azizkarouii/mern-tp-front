import { useState, useEffect } from 'react';
import { ThemeContext } from './theme-context';

// Étape 2 : le fournisseur garde l'état et le partage avec tous ses enfants
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem('app_theme') || 'light',
  );

  useEffect(() => {
    localStorage.setItem('app_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
