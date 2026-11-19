import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { ThemeContext } from '../context/theme-context';

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const totalCount = useSelector((state) => state.cart.totalCount);

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <span className="logo-icon">⚡</span>
        <h2>
          TechStore <span className="badge-mern">MERN S6</span>
        </h2>
      </div>
      <div className="nav-actions">
        <button className="btn-theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Mode Sombre' : '☀️ Mode Clair'}
        </button>
        <div className="cart-badge">
          <span className="cart-icon">🛒</span>
          <span className="badge-count">{totalCount}</span>
        </div>
      </div>
    </nav>
  );
}
