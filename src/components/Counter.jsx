
import React, { useEffect, useState } from 'react';

const MIN_COUNT = -50;
const MAX_COUNT = 50;

export default function Counter() {
  const [count, setCount] = useState(() => {
    const sauvegarde = localStorage.getItem('mon_compteur_valeur');
    return sauvegarde !== null ? parseInt(sauvegarde, 10) : 0;
  });
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState('Aucun clic pour le moment');
  const [totalClics, setTotalClics] = useState(0);
  const [historique, setHistorique] = useState(() => {
    const sauvegarde = localStorage.getItem('mon_compteur_historique');
    return sauvegarde !== null ? JSON.parse(sauvegarde) : [];
  });

  useEffect(() => {
    document.title = 'Compteur : ' + count;
  }, [count]);

  useEffect(() => {
    localStorage.setItem('mon_compteur_valeur', count.toString());
  }, [count]);

  useEffect(() => {
    localStorage.setItem(
      'mon_compteur_historique',
      JSON.stringify(historique),
    );
  }, [historique]);

  // Gestionnaire d'incrémentation
  const handleIncrement = () => {
    const nouveauCompte = count + step;

    if (nouveauCompte > MAX_COUNT) {
      window.alert("Seuil maximal de 50 atteint !");
      return;
    }

    setCount(nouveauCompte);
    setMessage('Ajout de ' + step);
    setTotalClics((total) => total + 1);

    const action = '+' + step;
    setHistorique((actions) => [...actions, action]);
  };

  // Gestionnaire de décrémentation
  const handleDecrement = () => {
    const nouveauCompte = count - step;

    if (nouveauCompte < MIN_COUNT) {
      window.alert("Seuil minimal de -50 atteint !");
      return;
    }

    setCount(nouveauCompte);
    setMessage('Retrait de ' + step);
    setTotalClics((total) => total + 1);

    const action = '-' + step;
    setHistorique((actions) => [...actions, action]);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowUp') {
        handleIncrement();
      } else if (event.key === 'ArrowDown') {
        handleDecrement();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [count, step]);

  // Gestionnaire de remise à zéro
  const handleReset = () => {
    setCount(0);
    setMessage('Remise à zéro');
    setTotalClics((total) => total + 1);
    setHistorique([]);
  };

  // Couleur dynamique selon le signe du compteur
  const getStyleClass = () => {
    if (count > 0) return 'counter-display positive';
    if (count < 0) return 'counter-display negative';

    return 'counter-display zero';
  };

  return (
    <div className="counter-card">
      <div className={getStyleClass()}>{count}</div>

      <div className="btn-group">
        <button className="btn btn-dec" onClick={handleDecrement}>
          -{step}
        </button>

        <button className="btn btn-reset" onClick={handleReset}>
          Reset
        </button>

        <button className="btn btn-inc" onClick={handleIncrement}>
          +{step}
        </button>
      </div>

      <div className="step-control">
        <label>Pas d'incrémentation :</label>

        <select
          value={step}
          onChange={(e) => setStep(parseInt(e.target.value, 10))}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="5">5</option>
          <option value="10">10</option>
        </select>
      </div>

      <div className="history-card">
        <p>
          <strong>Dernière action :</strong> {message}
        </p>

        <p>
          <strong>Total des clics :</strong> {totalClics}
        </p>

        {historique.length > 0 && (
          <p>
            <strong>Historique :</strong> {historique.join(', ')}
          </p>
        )}
      </div>
    </div>
  );
}
