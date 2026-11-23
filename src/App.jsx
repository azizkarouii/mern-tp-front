import React from 'react';
// TODO Volet 1 - Etape 3 : Importer { Routes, Route } depuis 'react-router-dom'
import RootLayout from './layouts/RootLayout';
import Accueil from './pages/Accueil';
import ArticleList from './pages/ArticleList';
import ArticleDetail from './pages/ArticleDetail';
import ArticleCreate from './pages/ArticleCreate';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <div>
      {/* TODO Volet 1 - Etape 3 : Declarer <Routes> avec <Route path="/" element={<RootLayout />}>
          et ses 5 routes enfants : index (Accueil), articles (ArticleList),
          articles/:id (ArticleDetail), nouveau (ArticleCreate) et * (NotFound) */}
      <RootLayout />
    </div>
  );
}
