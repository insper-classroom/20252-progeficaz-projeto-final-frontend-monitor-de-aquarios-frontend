import React, { useState } from "react";
import { updateOcupacao } from "../../api/aquarioService";
import "./botao_aquario.css";


function Botao_presenca({ aquario, onUpdate }) {
	const handleToggle = async () => {
		await updateOcupacao(aquario.id);
		onUpdate();
	};

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

export default CartaoAquario;
