export default function Cart() {
  // Étapes 4 et 6 : ces deux valeurs viendront du store Redux
  const items = [];
  const totalPrice = 0;

  return (
    <section className="card">
      <h2>Mon panier</h2>
      {items.length === 0 && <p className="vide">Le panier est vide.</p>}

      {items.map((item) => (
        <div key={item.id} className="ligne">
          <span>{item.name} <span className="prix">x {item.quantity}</span></span>
          <span>
            {/* Étape 7 : ces boutons enverront des actions au store */}
            <button>-</button>
            <button>+</button>
          </span>
        </div>
      ))}

      <p className="total">Total : {totalPrice} DT</p>
      <button>Vider le panier</button>
    </section>
  );
}
