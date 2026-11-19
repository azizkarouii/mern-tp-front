import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, clearCart, applyPromoCode } from '../redux/cartSlice';

export default function Cart() {
  const { items, totalPrice, discountPercent } = useSelector(
    (state) => state.cart,
  );
  const [code, setCode] = useState('');
  const discountedPrice = totalPrice * (1 - discountPercent / 100);
  const dispatch = useDispatch();

  return (
    <section className="card">
      <h2>Mon panier</h2>
      {items.length === 0 && <p className="vide">Le panier est vide.</p>}

      {items.map((item) => (
        <div key={item.id} className="ligne">
          <span>{item.name} <span className="prix">x {item.quantity}</span></span>
          <span>
            <button onClick={() => dispatch(removeItem(item.id))}>-</button>
            <button onClick={() => dispatch(addItem(item))}>+</button>
          </span>
        </div>
      ))}

      <div>
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Code promo"
        />
        <button onClick={() => dispatch(applyPromoCode(code))}>Appliquer</button>
      </div>

      <p className="total">Total : {totalPrice} DT</p>
      {discountPercent > 0 && (
        <p className="total" style={{ color: 'green' }}>
          Après remise ({discountPercent} %) : {discountedPrice} DT
        </p>
      )}
      <button onClick={() => dispatch(clearCart())}>Vider le panier</button>
    </section>
  );
}
