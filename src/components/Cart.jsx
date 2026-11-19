import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, clearCart, applyPromoCode } from '../redux/cartSlice';

export default function Cart() {
  const { items, totalCount, totalPrice, discountPercent } = useSelector(
    (state) => state.cart,
  );
  const [code, setCode] = useState('');
  const discountedPrice = totalPrice * (1 - discountPercent / 100);
  const dispatch = useDispatch();

  return (
    <section className="cart-card">
      <div className="cart-header">
        <h3>🛒 Mon Panier Redux</h3>
        {items.length > 0 && (
          <button className="btn-clear" onClick={() => dispatch(clearCart())}>
            🗑️ Vider
          </button>
        )}
      </div>

      {items.length === 0 ? (
        <div className="cart-empty">
          <p>Le panier est actuellement vide.</p>
          <span className="empty-subtext">
            Ajoutez un article depuis le catalogue pour observer la réactivité de Redux.
          </span>
        </div>
      ) : (
        <>
          <div className="cart-items-container">
            {items.map((item) => (
              <div key={item.id} className="cart-row">
                <span className="cart-item-icon">{item.icon}</span>
                <div className="cart-item-details">
                  <span className="cart-item-name">{item.name}</span>
                  <span className="cart-item-price">
                    {item.price} DT x {item.quantity} ={' '}
                    <strong>{item.price * item.quantity} DT</strong>
                  </span>
                </div>
                <div className="cart-item-qty">
                  <button className="btn-qty" onClick={() => dispatch(removeItem(item.id))}>-</button>
                  <span className="qty-number">{item.quantity}</span>
                  <button className="btn-qty" onClick={() => dispatch(addItem(item))}>+</button>
                </div>
              </div>
            ))}
          </div>

          <div className="promo-box">
            <input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Code promo"
            />
            <button className="btn-add" onClick={() => dispatch(applyPromoCode(code))}>
              Appliquer
            </button>
          </div>

          <div className="cart-total-box">
            <div className="total-row">
              <span>Nombre total d'articles :</span>
              <span>{totalCount}</span>
            </div>
            <div className="total-row total-highlight">
              <span>Montant Total :</span>
              <span className="total-amount">{totalPrice} DT</span>
            </div>
            {discountPercent > 0 && (
              <div className="total-row total-highlight remise">
                <span>Après remise ({discountPercent} %)</span>
                <span>{discountedPrice} DT</span>
              </div>
            )}
          </div>
        </>
      )}
    </section>
  );
}
