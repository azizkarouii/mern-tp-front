import { products } from '../data/products';

export default function ProductList() {
  return (
    <section className="card">
      <h2>Catalogue</h2>
      {products.map((product) => (
        <div key={product.id} className="ligne">
          <span>{product.name} <span className="prix">{product.price} DT</span></span>
          {/* Étape 5 : ce bouton enverra une action au store */}
          <button className="principal">+ Ajouter</button>
        </div>
      ))}
    </section>
  );
}
