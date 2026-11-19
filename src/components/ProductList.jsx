import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import { showToast } from '../redux/uiSlice';
import { products } from '../data/products';

export default function ProductList() {
  const dispatch = useDispatch();

  return (
    <section className="card">
      <h2>Catalogue</h2>
      {products.map((product) => (
        <div key={product.id} className="ligne">
          <span>{product.name} <span className="prix">{product.price} DT</span></span>
          <button className="principal" onClick={() => {
              dispatch(addItem(product));
              dispatch(showToast(`${product.name} ajouté au panier`));
            }}>+ Ajouter</button>
        </div>
      ))}
    </section>
  );
}
