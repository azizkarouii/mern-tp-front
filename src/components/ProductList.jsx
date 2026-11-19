import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import { showToast } from '../redux/uiSlice';

const products = [
  { id: 1, name: 'Écran UltraWide 4K 34"', price: 850, category: 'Affichage', icon: '🖥️' },
  { id: 2, name: 'Clavier Mécanique RGB', price: 180, category: 'Périphérique', icon: '⌨️' },
  { id: 3, name: 'Souris Sans Fil Ergonomique', price: 95, category: 'Accessoire', icon: '🖱️' },
  { id: 4, name: 'Casque Haute Fidélité ANC', price: 320, category: 'Audio', icon: '🎧' },
];

export default function ProductList() {
  const dispatch = useDispatch();

  return (
    <section className="product-section">
      <div className="section-title-box">
        <h3>📦 Catalogue Produits</h3>
        <p className="subtitle-hint">
          Chaque clic sur le bouton déclenche une action via{' '}
          <code>dispatch(addItem(produit))</code>.
        </p>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="card-top">
              <span className="product-icon">{product.icon}</span>
              <span className="product-category">{product.category}</span>
            </div>
            <h4 className="product-title">{product.name}</h4>
            <div className="card-bottom">
              <span className="product-price">{product.price} DT</span>
              <button
                className="btn-add"
                onClick={() => {
                  dispatch(addItem(product));
                  dispatch(showToast(`${product.name} ajouté au panier`));
                }}
              >
                + Ajouter
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
