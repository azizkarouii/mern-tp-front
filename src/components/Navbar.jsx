import React from 'react';
// TODO Volet 1 - Etape 2 : Importer { NavLink } depuis 'react-router-dom'

export default function Navbar() {
  return (
    <header style={{ backgroundColor: '#1e3a8a', color: 'white', padding: '14px 20px' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>Polytech Portal -- MERN S7</h1>
          <p style={{ fontSize: '0.8rem', color: '#93c5fd' }}>React Router SPA & Communication Axios</p>
        </div>

        <nav style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* TODO Volet 1 - Etape 2 : Remplacer ces <a href> par <NavLink to="..."> */}
          <a href="/" className="nav-link">Accueil</a>
          <a href="/articles" className="nav-link">Articles (API)</a>
          <a href="/nouveau" className="nav-link">+ Publier</a>
        </nav>
      </div>
    </header>
  );
}
