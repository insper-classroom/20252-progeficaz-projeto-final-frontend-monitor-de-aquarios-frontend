// src/components/login/login.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login as apiLogin } from "../../api/aquarioService";
import "./login.css";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const data = await apiLogin(form.email, form.password);
      if (data?.access_token) {
        localStorage.setItem("access_token", data.access_token);
        localStorage.setItem("user_email", form.email);
        // Limpa os campos antes de navegar
        setForm({ email: "", password: "" });
        navigate("/");
      } else {
        setError("Resposta inesperada do servidor");
      }
    } catch (err) {
      setError(err.message || "Erro no login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Entrar</h2>

        {error && <div className="login-error">{error}</div>}

        <label>
          Email
          <input name="email" type="email" value={form.email} onChange={handleChange} required />
        </label>

        <label>
          Senha
          <input name="password" type="password" value={form.password} onChange={handleChange} required />
        </label>

        <button type="submit" className="login-submit" disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </button>

        <p style={{ marginTop: 12, fontSize: 13, color: "#666", textAlign: "center" }}>
          Ainda não tem conta?{" "}
          <Link to="/cadastro" style={{ color: "#2b6cff", textDecoration: "none", fontWeight: 600 }}>
            Cadastre-se
          </Link>
        </p>
      </form>
    </div>
  );
}
