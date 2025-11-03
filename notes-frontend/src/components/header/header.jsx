import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logoInsper from "../../assets/logoinsper.png";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="left">
          <img src={logoInsper} alt="Insper" className="logo" />
        </div>
        <div className="center">
          <h1>Monitoramento de aquários</h1>
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
