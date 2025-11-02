import React from "react";
import { useParams } from "react-router-dom";
import Botao_presenca from './components/botao_presenca/botao_aquario.jsx'

function Tela_presenca() {
  const { id } = useParams(); // pega o ID da rota

  return (
    <div>
      <h2>Tela de Presença</h2>
			{/* passamos o id para o botao presenca para que ele faça a busca no banco com a api */}
      <Botao_presenca id={id} />
    </div>
  );
}

export default Tela_presenca;