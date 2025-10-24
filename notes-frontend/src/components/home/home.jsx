import React, { useEffect, useState } from "react";
import { getAquarios } from "../../api/aquarioService";
import CartaoAquario from "../cartaoAquario/cartaoAquario";
import Filtro from "../filtro/filtro";
import "./home.css";

function Home() {
  const [aquarios, setAquarios] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const carregarAquarios = async () => {
    try {
      const data = await getAquarios();
      setAquarios(data);
    } catch (erro) {
      console.error("Erro ao buscar aquários:", erro);
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    carregarAquarios();
  }, []);

  if (carregando) {
    return <p>Carregando aquários</p>;
  }

  return (
    <div className="home">
      <h2>Salas de Estudo</h2>

      <Filtro setAquarios={setAquarios} />

      <div className="grid">
        {aquarios.length > 0 ? (
          aquarios.map((aq) => (
            <CartaoAquario
              key={aq.id}
              aquario={aq}
              onUpdate={carregarAquarios}
            />
          ))
        ) : (
          <p>Nenhuma sala encontrada.</p>
        )}
      </div>
    </div>
  );
}

export default Home;