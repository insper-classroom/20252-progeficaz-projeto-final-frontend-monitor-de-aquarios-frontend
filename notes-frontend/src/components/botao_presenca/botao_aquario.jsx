import React, { useEffect, useState } from "react";
import { updateOcupacao, getAquarioPorId } from "../../api/aquarioService";
import "./botao_aquario.css";

function Botao_presenca({ id }) {
  const [aquario, setAquario] = useState(null);

  useEffect(() => {
		// aqui temos a carcaça padrão onde preenchemos o aquario toda vez que a 
    async function carregarAquario() {
      const data = await getAquarioPorId(id);
      setAquario(data);
    }
    carregarAquario();
  }, [aquario]); //aquario é passado pois queremos que o elemento atualize toda vez que ele mudar 

	// funcao para trocar o status de ocupacao do aquario de forma assincrona 
  const handleToggle = async () => {
    await updateOcupacao(id);
    const data = await getAquarioPorId(id);
    setAquario(data);
  };

	// se ainda não existir o aquario ele retorna a msg carregando 
  if (!aquario) return <p>Carregando...</p>;

  return (
    <div className="card">
      <h3>{aquario.nome || `Sala ${aquario.id}`}</h3>
      <p><strong>Prédio:</strong> {aquario.predio}</p>
      <p><strong>Andar:</strong> {aquario.andar}</p>
      <p><strong>Cadeiras:</strong> {aquario.capacidade}</p>
      <p>
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
