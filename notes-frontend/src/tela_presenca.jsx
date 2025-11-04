import React from "react";
import { useParams } from "react-router-dom";
import Botao_presenca from './components/botao_presenca/botao_aquario.jsx';
import "./tela_presenca.css";

function Tela_presenca() {
  const { id } = useParams();

  return (
    <div className="tela-presenca">
      <div className="tela-presenca-content">
        <h2 className="titulo-ocupacao">Ocupação do Aquário</h2>
        <Botao_presenca id={id} />
      </div>
    </div>
  );
}

export default Tela_presenca;