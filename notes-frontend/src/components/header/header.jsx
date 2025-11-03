import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="center">
          <h1>Controle de Aquários</h1>
        </div>

        <div className="right">
          <Link to="/login">
            <button className="login-button">Login</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
