import React, { useState, useEffect } from "react";
import { updateOcupacao, joinWaitlist, getFavoriteBuildings, toggleFavoriteBuilding } from "../../api/aquarioService";
import "./cartaoAquario.css";

function CartaoAquario({ aquario, onUpdate }) {
  const [waitlistMessage, setWaitlistMessage] = useState("");
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const favorites = getFavoriteBuildings();
    setIsFavorite(favorites.includes(aquario.predio));
  }, [aquario.predio]);

  const handleFavoriteToggle = () => {
    toggleFavoriteBuilding(aquario.predio);
    setIsFavorite(!isFavorite);
    if (onUpdate) onUpdate();
  };
  const handleToggle = async () => {
    await updateOcupacao(aquario.id);
    onUpdate();
  };

  return (
    <div className="card">
        <div className="card-header">
          <h3>{aquario.nome || `Sala ${aquario.id}`}</h3>
        </div>
        <div className="building-info">
          <p><strong>Prédio:</strong> {aquario.predio}</p>
          <button
            onClick={handleFavoriteToggle}
            className={`favorite-button ${isFavorite ? 'favorite-active' : ''}`}
            title={isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
          >
            {isFavorite ? "★" : "☆"}
          </button>
        </div>
      <p><strong>Andar:</strong> {aquario.andar}</p>
      <p><strong>Cadeiras:</strong> {aquario.capacidade}</p>
      
      <p>
        <strong>Status:</strong>{" "}
        <span className={aquario.ocupacao ? "ocupado" : "livre"}>
          {aquario.ocupacao ? "Ocupado" : "Livre"}
        </span>
      </p>
      <a href={`/${aquario.id}`}>Detalhes</a>
    </div>
  );
}

export default CartaoAquario;
