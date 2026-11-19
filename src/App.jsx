import { useContext } from 'react';
import { ThemeContext } from './context/theme-context';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import NotificationToast from './components/NotificationToast';

export default function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app-shell ${theme}`}>
      <Navbar />
      <main className="main-content container">
        <header className="page-intro">
          <h1>
            État Global : <code>useContext</code> &amp; <code>Redux Toolkit</code>
          </h1>
          <p>
            Séance 6 : Coexistence d'un état applicatif léger (Thème géré par
            Context) et d'un état métier transactionnel (Panier géré par Redux
            Toolkit).
          </p>
        </header>
        <div className="store-layout">
          <ProductList />
          <Cart />
        </div>
      </main>
      <NotificationToast />
    </div>
  );
}
