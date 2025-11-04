import React, { useEffect, useState } from "react";
import { updateOcupacao, getAquarioPorId } from "../../api/aquarioService";
import "./botao_aquario.css";

function Botao_presenca({ id }) {
  const [aquario, setAquario] = useState(null);

  useEffect(() => {
    async function carregarAquario() {
      const data = await getAquarioPorId(id);
      setAquario(data);
    }
    carregarAquario();
  }, [aquario]); 
  const handleToggle = async () => {
    await updateOcupacao(id);
    const data = await getAquarioPorId(id);
    setAquario(data);
  };

  if (!aquario) return (
    <div className="card-botao">
      <p>Carregando informações...</p>
    </div>
  );
  const predioStr = aquario.predio !== undefined && aquario.predio !== null ? String(aquario.predio).trim() : "";
  const idNum = Number(aquario.id);

  const displayAndar = (predioStr === "1" || predioStr === "01") && !Number.isNaN(idNum) && idNum <= 21
    ? "0"
    : (aquario.andar ?? "Não informado");

  return (
    <div className="card-botao">
      <h3>{aquario.nome || `Sala ${aquario.id}`}</h3>
      <p className="info-local">
        <strong>Prédio:</strong> {aquario.predio || "Não informado"}
      </p>
      <p className="info-local">
        <strong>Andar:</strong> {displayAndar}
      </p>
      <p className="info-status">
        <strong>Status:</strong>{" "}
        <span className={aquario.ocupacao ? "ocupado" : "livre"}>
          {aquario.ocupacao ? "Ocupado" : "Livre"}
        </span>
      </p>
      <button onClick={handleToggle}>
        {aquario.ocupacao ? "Liberar" : "Ocupar"}
      </button>
    </div>
  );
}

export default Botao_presenca;
