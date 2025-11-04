import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { register as apiRegister } from "../../api/aquarioService";
import "./register.css";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      const data = await apiRegister(form.username, form.email, form.password);
      // Se backend retornar mensagem de sucesso, redireciona para login
      setSuccess(data?.mensagem || "Cadastro realizado com sucesso!");
      // Limpa os campos do formulário
      setForm({ username: "", email: "", password: "" });
      setTimeout(() => {
        navigate("/login");
      }, 1500); // Aumentei um pouco o tempo para dar para ler a mensagem de sucesso
    } catch (err) {
      setError(err.message || "Erro ao cadastrar.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Cadastrar conta</h2>

        {error && <div className="register-error">{error}</div>}
        {success && <div className="register-success">{success}</div>}

        <label>
          Nome de usuário
          <input
            name="username"
            type="text"
            value={form.username}
            onChange={handleChange}
            required
            minLength={3}
            placeholder="Digite seu nome de usuário"
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Digite seu email"
          />
        </label>

        <label>
          Senha
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
            minLength={6}
            placeholder="Digite sua senha"
          />
        </label>

        <button type="submit" className="register-submit" disabled={loading}>
          {loading ? "Cadastrando..." : "Cadastrar"}
        </button>

        <p>
          Já tem conta? <Link to="/login">Entrar</Link>
        </p>
      </form>
    </div>
  );
}
