import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// TODO Volet 2 - Etape 2 : Creer manuellement le fichier src/services/api.js puis l'importer ici :
// import api from '../services/api';

export default function ArticleList() {
  // TODO Volet 2 - Etape 3A : Declarer les 3 etats [articles, setArticles], [loading, setLoading], [error, setError]
  const [articles, setArticles] = useState([]);

  // TODO Volet 2 - Etape 3B : Appeler api.get('/articles') dans useEffect(() => { ... }, [])

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '1.7rem', fontWeight: 'bold' }}>Catalogue des Articles ({articles.length})</h2>
        <Link to="/nouveau" className="btn-primary">+ Nouvel Article</Link>
      </div>

      <div className="card-grid">
        {articles.map((article) => (
          <div key={article.id} className="card">
            <div>
              <span className="badge">{article.categorie}</span>
              <h3 style={{ fontSize: '1.2rem', margin: '10px 0 6px' }}>{article.titre}</h3>
              <p style={{ fontSize: '0.85rem', color: '#64748b' }}>Auteur : {article.auteur}</p>
              <p style={{ marginTop: '10px', color: '#334155' }}>{article.contenu}</p>
            </div>
            <div style={{ marginTop: '16px', paddingTop: '12px', borderTop: '1px solid #f1f5f9' }}>
              <Link to={`/articles/${article.id}`} style={{ color: '#2563eb', fontWeight: '600', textDecoration: 'none' }}>
                Lire le detail &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
