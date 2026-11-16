import { useContext } from 'react';
import { ThemeContext } from '../context/theme-context';

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // Étape 4 : cette valeur viendra du store Redux
  const totalCount = 0;

  return (
    <nav className="navbar">
      <h1>TechStore</h1>
      <button onClick={toggleTheme}>
        {theme === 'light' ? 'Mode sombre' : 'Mode clair'}
      </button>
      <span className="badge">Panier : {totalCount}</span>
    </nav>
  );
}
