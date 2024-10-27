// src/components/PostDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './PostDetail.css';

function PostDetail() {
  const { id } = useParams();
  const [modelDetails, setModelDetails] = useState(null);

  useEffect(() => {
    axios.get("https://parallelum.com.br/fipe/api/v1/carros/marcas/59/modelos/${id}")
      .then(response => setModelDetails(response.data))
      .catch(error => console.error("Error fetching model details:", error));
  }, [id]);

  if (!modelDetails) return <p>Loading...</p>;

  return (
    <div className="model-details">
      <h2>{modelDetails.nome}</h2>
      <p><strong>Code:</strong> {modelDetails.codigo}</p>
    </div>
  );
}

export default PostDetail;