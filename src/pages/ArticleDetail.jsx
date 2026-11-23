import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import api from '../services/api';

export default function ArticleDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchOne() {
      try {
        const res = await api.get(`/articles/${id}`);
        setArticle(res.data);
      } catch {
        setArticle(null);
      } finally {
        setLoading(false);
      }
    }
    fetchOne();
  }, [id]);

  if (loading) return <p>Chargement...</p>;

  if (!article) {
    return (
      <div style={{ background: '#fef2f2', padding: '20px', borderRadius: '8px', color: '#b91c1c' }}>
        <h3>Article #{id} introuvable.</h3>
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
