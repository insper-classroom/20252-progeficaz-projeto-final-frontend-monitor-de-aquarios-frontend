import { useState, useEffect } from 'react'
import "./cartaoDetalhes.css"
import { getAquarioPorId } from "../../api/aquarioService";

const CartaoDetalhes = ({ id, onClose }) => {

    const [aquario, setAquario] = useState(null);

    useEffect(() => {
        async function carregarAquario() {
            if (!id) return;
            const data = await getAquarioPorId(id);
            setAquario(data);
        }
        carregarAquario();
    }, [id]); // carregar quando o id mudar 


    // se ainda não existir o aquario ele retorna a msg carregando 
    if (!aquario) return <p>Carregando...</p>;

    return (
        <div className='aquario-modal'>
            <div className="cartao ">
                <div className='cartaoHeader'>
                    <button type="button" className="fechar" onClick={() => { if (onClose) onClose(); }} aria-label="Fechar">❌</button>
                    <h2>{aquario.nome} </h2>
                </div>   
                <p>📍{aquario.predio} | Andar: {aquario.andar}</p>
                <p>👤Capacidade : {aquario.capacidade} pessoas</p> 
                <p>⚙️Status: {aquario.ocupacao ? "Indisponivel 🔴" : "Livre 🟢"}</p>
                <p>🔔Avise-me quando estiver disponível:</p>
                <div className='botaoNotificacoes'>
                    <button >Ativar notificações</button>
                </div>
            </div>
        </div>
    )
}

export default CartaoDetalhes
