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
    "" : ["1","2","5"],
    "predio_1":["1"],
    "predio_2":["2","5"]
  } //serve para associar os predios aos andares, mudando a opcao conforme o predio selecionado
  const andares = andaresPredio[filtros.predio] || [];

  return (
    <div className="filtro">

        <select name="predio" onChange={handleChange} value={filtros.predio}>
        <option value="">Todos</option>
        <option value="predio_1">predio_1</option>
        <option value="predio_2">predio_2</option>
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
        name="capacidade_cadeiras"
        placeholder="Capacidade"
        onChange={handleChange}
      >
        <option value="">Capacidade</option>
        <option value="6">6</option>
        <option value="10">10</option>
      </select>
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
