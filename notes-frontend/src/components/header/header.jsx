// src/components/header/header.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

// tenta carregar a logo; se faltar, usa string vazia para evitar crash
let logoInsper = "";
try {
  // require funciona no bundler (webpack / Vite); se você usa outro fluxo, adapte.
  // Se já tinha import estático e dava erro por caminho, trocar para require reduz chance.
  // Se isso ainda falhar, comente a linha abaixo e deixe logoInsper = "".
  logoInsper = require("../../assets/logoinsper.png");
} catch (e) {
  // não faz nada — apenas evita crash se o arquivo não existir
  console.warn("Logo não encontrada em ../../assets/logoinsper.png");
}

function Header() {
  const token = localStorage.getItem("access_token");
  const userEmail = localStorage.getItem("user_email");

  const handleLogout = async () => {
    const tokenLocal = localStorage.getItem("access_token");
    try {
      if (tokenLocal) {
        // chama o backend para revogar token (opcional). Se cair aqui com erro,
        // não interrompe o fluxo.
        await fetch("http://localhost:5000/logout", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${tokenLocal}`,
            "Content-Type": "application/json",
          },
        });
      }
    } catch (err) {
      console.error("Erro ao chamar /logout (ignorado):", err);
    }

    // Limpa tudo que pode deixar estado de usuário
    localStorage.removeItem("access_token");
    localStorage.removeItem("user_email");
    localStorage.removeItem("favorite_buildings");
    localStorage.removeItem("favoritos");
    localStorage.removeItem("favorites");

    // Redirecionamento simples, sem depender de useNavigate (evita erro se Header for renderizado fora do Router)
    window.location.href = "/login";
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="left">
          {logoInsper ? (
            <img src={logoInsper} alt="Insper" className="logo" />
          ) : (
            <div style={{ width: 120, height: 40 }} /> // placeholder para manter layout
          )}
        </div>
        <div className="center">
          <h1>Monitoramento de aquários</h1>
        </div>
        <div className="right">
          {token ? (
            <>
              {userEmail && <span className="user-email" style={{ marginRight: 8 }}>{userEmail}</span>}
              <button className="logout-button" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="login-button">Login</button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
