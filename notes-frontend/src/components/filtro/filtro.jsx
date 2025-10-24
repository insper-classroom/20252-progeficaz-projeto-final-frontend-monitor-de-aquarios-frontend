import React, { useState } from "react";
import { filterAquarios } from "../../api/aquarioService";
import "./filtro.css";

function Filtro({ setAquarios }) {
  const [filtros, setFiltros] = useState({
    predio: "",
    andar: "",
    capacidade_cadeiras: "",
    ocupado: "",
  });

  const handleChange = (e) => {
    setFiltros({ ...filtros, [e.target.name]: e.target.value });
  };

  const handleFiltrar = async () => {
    const data = await filterAquarios(filtros);
    setAquarios(data);
  };

  return (
    <div className="filtro">
      <input name="predio" placeholder="Prédio" onChange={handleChange} />
      <input name="andar" placeholder="Andar" onChange={handleChange} />
      <input
        name="capacidade_cadeiras"
        placeholder="Capacidade"
        onChange={handleChange}
      />
      <select name="ocupado" onChange={handleChange}>
        <option value="">Todos</option>
        <option value="true">Ocupados</option>
        <option value="false">Livres</option>
      </select>
      <button onClick={handleFiltrar}>Filtrar</button>
    </div>
  );
}

export default Filtro;
