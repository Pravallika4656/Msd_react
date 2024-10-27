// src/components/Posts.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Posts.css';

function Posts() {
  const [models, setModels] = useState([]);

  useEffect(() => {
    axios.get('https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos')
      .then(response => setModels(response.data.modelos))
      .catch(error => console.error("Error fetching car models:", error));
  }, []);

  return (
    <div className="models-container">
      <h2 className="title">Car Models</h2>
      <ul className="models-list">
        {models.map(model => (
          <li key={model.codigo} className="model-item">
            <Link className="model-link" to={'/posts/${model.codigo}'}>{model.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;