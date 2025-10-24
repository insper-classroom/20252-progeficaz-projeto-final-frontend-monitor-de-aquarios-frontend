import React from "react";
import { updateOcupacao } from "../../api/aquarioService";
import "./cartaoAquario.css";

function CartaoAquario({ aquario, onUpdate }) {
  const handleToggle = async () => {
    await updateOcupacao(aquario.id);
    onUpdate();
  };

  return (
    <div className="card">
      <h3>{aquario.nome || `Sala ${aquario.id}`}</h3>
      <p><strong>Prédio:</strong> {aquario.predio}</p>
      <p><strong>Andar:</strong> {aquario.andar}</p>
      <p><strong>Cadeiras:</strong> {aquario.capacidade_cadeiras}</p>
      <p>
        <strong>Status:</strong>{" "}
        <span className={aquario.ocupado ? "ocupado" : "livre"}>
          {aquario.ocupado ? "Ocupado" : "Livre"}
        </span>
      </p>
      <button onClick={handleToggle}>
        {aquario.ocupado ? "Liberar" : "Ocupar"}
      </button>
    </div>
  );
}

export default CartaoAquario;
