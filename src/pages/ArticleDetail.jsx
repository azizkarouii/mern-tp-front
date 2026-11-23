import React, { useState, useEffect } from 'react';
// TODO Volet 1 & 2 - Etape 4A : Importer { useParams, useNavigate, Link } depuis 'react-router-dom' et api depuis '../services/api'
import { Link } from 'react-router-dom';

export default function ArticleDetail() {
  // TODO 1 : Extraire { id } avec useParams()
  const id = 1;
  const [article, setArticle] = useState(null);

  // TODO 2 : Charger l'article avec api.get('/articles/' + id) dans useEffect

  if (!article) {
    return (
      <div style={{ background: '#fef2f2', padding: '20px', borderRadius: '8px', color: '#b91c1c' }}>
        <h3>Chargement ou article #{id} non charge...</h3>
        <Link to="/articles" style={{ color: '#2563eb', display: 'inline-block', marginTop: '10px' }}>&larr; Retour au catalogue</Link>
      </div>
    );
  }

  return (
    <article style={{ background: 'white', padding: '28px', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
      <span className="badge">{article.categorie}</span>
      <h1 style={{ fontSize: '1.8rem', margin: '12px 0 8px' }}>{article.titre}</h1>
      <p style={{ color: '#64748b', marginBottom: '20px' }}>Par <strong>{article.auteur}</strong> &bull; ID #{article.id}</p>
      <p style={{ lineHeight: 1.7, color: '#1e293b' }}>{article.contenu}</p>
      <div style={{ marginTop: '24px', paddingTop: '14px', borderTop: '1px solid #e2e8f0' }}>
        <Link to="/articles" style={{ color: '#2563eb', fontWeight: '600', textDecoration: 'none' }}>&larr; Retour a la liste</Link>
      </div>
    </article>
  );
}
