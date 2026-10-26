
import React, { useState } from 'react';
import Header from './Components/Header.jsx';
import Counter from './Components/Counter.jsx';
import AutoTimer from './Components/AutoTimer.jsx';
import './index.css';

export default function App() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div className="app-container">
      <Header
        titre="Mon Super Compteur React"
        sousTitre="Maîtrise des Hooks fondamentaux useState et useEffect"
      />
      <Counter />
      <div className="timer-controls">
        <button
          className="btn btn-reset"
          type="button"
          onClick={() => setShowTimer((visible) => !visible)}
        >
          {showTimer ? 'Masquer le Chronomètre' : 'Afficher le Chronomètre'}
        </button>
      </div>
      {showTimer && <AutoTimer />}
    </div>
  );
}
