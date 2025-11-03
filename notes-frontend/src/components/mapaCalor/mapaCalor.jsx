import React from "react";
import { updateOcupacao } from "../../api/aquarioService";
import "./mapaAquarios.css";

function MapaAquarios({ aquarios, onUpdate }) {
  const handleToggle = async (id) => {
    await updateOcupacao(id);
    onUpdate();
  };

  const getCor = (ocupacao) => {
    if (ocupacao < 30) return "rgba(76, 175, 80, 0.6)";   
    if (ocupacao < 70) return "rgba(255, 193, 7, 0.6)";  
    return "rgba(244, 67, 54, 0.6)";                      
  };

  return (
    <div className="mapa-container">
        {/* adicionar imagem com os prédios do insper */}
      <img src="/mapa-predios.png" alt="Mapa dos prédios" className="mapa-img" />
      
      {aquarios.map((aquario) => (
        <div
          key={aquario.id}
          className="aquario-shape"
          style={{
            top: aquario.posY,
            left: aquario.posX, 
            backgroundColor: getCor(aquario.ocupacao), // define o nível de ocupação
          }}
          onClick={() => handleToggle(aquario.id)} // mapa interativo


          
          title={`${aquario.nome} - ${aquario.ocupacao}% ocupado`} // porcentagem do quão ocupada está
        >
          <span>{aquario.nome}</span>
        </div>
      ))}
    </div>
  );
}

export default MapaAquarios;
