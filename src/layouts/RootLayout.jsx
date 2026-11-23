import React from 'react';
// TODO Volet 1 - Etape 3 : Importer { Outlet } depuis 'react-router-dom'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function RootLayout() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main className="container" style={{ flex: 1, padding: '28px 16px' }}>
        {/* TODO Volet 1 - Etape 3 : Placer <Outlet /> ici pour afficher la route enfant active */}
      </main>
      <Footer />
    </div>
  );
}
