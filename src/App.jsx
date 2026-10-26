
import React from 'react';
import Header from './Components/Header.jsx';
import Counter from './Components/Counter.jsx';
import './index.css';

export default function App() {
  return (
    <div className="app-container">
      <Header
        titre="Mon Super Compteur React"
        sousTitre="Maîtrise des Hooks fondamentaux useState et useEffect"
      />
      <Counter/>
    </div>
  );
}
