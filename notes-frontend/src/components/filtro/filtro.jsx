import React, { useState } from "react";
import { filterAquarios } from "../../api/aquarioService";
import "./filtro.css";

function Filtro({ setAquarios }) {
  const [filtros, setFiltros] = useState({
    predio: "",
    andar: "",
    capacidade: "",
    ocupacao: "",
  });

  const handleChange = (e) => {
    if(e.target.name == "predio"){
      setFiltros({...filtros, predio : e.target.value, andar : ""})
  
    }//reseta o filtro do andar caso ele mude o predio
    else{
    setFiltros({ ...filtros, [e.target.name]: e.target.value });
  }};

  const handleFiltrar = async () => {
    const data = await filterAquarios(filtros);
    setAquarios(data);
  };
  
  const andaresPredio = {
    "" : [],
    "Prédio Cláudio Haddad":["0"],
    "Prédio Quatá 200":["2","5"],
		"Prédio Quatá 67":["1"]
  }
  const andares = andaresPredio[filtros.predio] || [];

  return (
    <div className="filtro">
      <div className="filtro-grupo">
        <label>Prédios</label>
        <select name="predio" onChange={handleChange} value={filtros.predio}>
          <option value="">Todos</option>
          <option value="Prédio Cláudio Haddad">Prédio Cláudio Haddad</option>
          <option value="Prédio Quatá 200">Prédio Quatá 200</option>
          <option value="Prédio Quatá 67">Prédio Quatá 67</option>
        </select>
      </div>

      <div className="filtro-grupo">
        <label>Andares</label>
        <select name="andar" onChange={handleChange} value={filtros.andar}>
          <option value="">Todos</option>
          {andares.map((andar) => (
            <option key={andar} value={andar}>{andar}</option>
          ))}
        </select>
      </div>
      
      <div className="filtro-grupo">
        <label>Capacidades</label>
        <select name="capacidade" onChange={handleChange}>
          <option value="">Todos</option>
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="10">10</option>
        </select>
      </div>

      <div className="filtro-grupo">
        <label>Ocupação</label>
        <select name="ocupacao" onChange={handleChange}>
          <option value="">Todos</option>
          <option value="true">Ocupados</option>
          <option value="false">Livres</option>
        </select>
      </div>

      <button onClick={handleFiltrar}>Filtrar</button>
    </div>
  );
}

export default Filtro;
