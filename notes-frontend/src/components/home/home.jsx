import React, { useEffect, useState } from "react";
import { getAquarios } from "../../api/aquarioService";
import Header from "../header/header";
import Filtro from "../filtro/filtro";
import CartaoDetalhes from "../cartaoDetalhes/cartaoDetalhes";
import "./home.css";

function Home() {
  const [aquarios, setAquarios] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [aquarioSelecionado, setAquarioSelecionado] = useState(null);

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
  }, [aquarios]);

  if (carregando) return <p>Carregando aquários...</p>;

  const agrupado = aquarios.reduce((acc, a) => {
    if (!acc[a.predio]) acc[a.predio] = {};
    if (!acc[a.predio][a.andar]) acc[a.predio][a.andar] = [];
    acc[a.predio][a.andar].push(a);
    return acc;
  }, {});

  return (
    <div className="home">
      <Header />
      <h2 className="titulo">Aquários</h2>

      <Filtro setAquarios={setAquarios} />

      <div className="predios-container">
        {Object.entries(agrupado).map(([predio, andares]) => (
          <div key={predio} className="predio">
            <h3 className="predio-nome">• {predio}</h3>

            {Object.entries(andares).map(([andar, salas]) => (
              <div key={andar} className="andar">
                <h4 className="andar-titulo">{andar}º Andar</h4>

                <div className="bolinhas-container">
                  {salas.map((sala) => (
                    <button
                      key={sala.id}
                      className={`bolinha ${
                        sala.ocupacao ? "ocupado" : "livre"
                      }`}
                      onClick={() => setAquarioSelecionado(sala.id)} 
                    >
                      {String(sala.id).padStart(2, "0")}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      {aquarioSelecionado && (
        <div
          className="modal-overlay"
          onClick={() => setAquarioSelecionado(null)}
        >
          <div
            className="modal-conteudo"
            onClick={(e) => e.stopPropagation()}
          >
            <CartaoDetalhes
              id={aquarioSelecionado} 
              onClose={() => setAquarioSelecionado(null)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
