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
  } //serve para associar os predios aos andares, mudando a opcao conforme o predio selecionado
  const andares = andaresPredio[filtros.predio] || [];

  return (
    <div className="filtro">

        <select name="predio" onChange={handleChange} value={filtros.predio}>
        <option value="">Todos</option>
        <option value="Prédio Cláudio Haddad">Prédio Cláudio Haddad</option>
        <option value="Prédio Quatá 200">Prédio Quatá 200</option>
				<option value="Prédio Quatá 67">Prédio Quatá 67</option>
      </select>
        <select name="andar" placeholder="Andar" onChange={handleChange}value={filtros.andar}>
      <option value="">Andares</option>
    {andares.map((andar) => (
      <option key={andar} value={andar}>
        {andar}
      </option>//opcoes de andares conforme o predio
    ))}


      </select>
      
      <select
        name="capacidade"
        placeholder="Capacidade"
        onChange={handleChange}
      >
        <option value="">Capacidade</option>
        <option value="6">6</option>
				<option value="8">8</option>
        <option value="10">10</option>
      </select>
      <select name="ocupacao" onChange={handleChange}>
        <option value="">Todos</option>
        <option value="true">Ocupados</option>
        <option value="false">Livres</option>
      </select>
      <button onClick={handleFiltrar}>Filtrar</button>
    </div>
  );
}

export default Filtro;
