import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "./cartaoDetalhes.css"
import { getAquarioPorId, joinWaitlist } from "../../api/aquarioService";


const CartaoDetalhes = ({ id, onClose }) => {
    const [aquario, setAquario] = useState(null);
    const [msg, setMsg] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        async function carregarAquario() {
            if (!id) return;
            const data = await getAquarioPorId(id);
            setAquario(data);
        }
        carregarAquario();
    }, [id]);

    const handleNotificacao = async () => {
        setMsg("");
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }
        setLoading(true);
        try {
            await joinWaitlist(id);
            setMsg("Você foi adicionado à lista de espera para notificações!");
        } catch (err) {
            setMsg(err.message || "Erro ao ativar notificações.");
        } finally {
            setLoading(false);
        }
    };

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
                {aquario.ocupacao ? (
                    <>
                        <p>🔔Avise-me quando estiver disponível:</p>
                        <div className='botaoNotificacoes'>
                            <button onClick={handleNotificacao} disabled={loading}>
                                {loading ? "Ativando..." : "Ativar notificações"}
                            </button>
                        </div>
                        {msg && <div className="notificacao-msg">{msg}</div>}
                    </>
                ) : null}
            </div>
        </div>
    )
}

export default CartaoDetalhes
