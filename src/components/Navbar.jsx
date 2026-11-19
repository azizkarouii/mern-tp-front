import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { ThemeContext } from '../context/theme-context';

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const totalCount = useSelector((state) => state.cart.totalCount);

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
