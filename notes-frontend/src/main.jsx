import React from 'react'
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TelaPresenca from './tela_presenca.jsx'
import Home from "./components/home/home.jsx"
import Detalhes from './detalhes.jsx'
import Login from './components/login/login.jsx'
import Register from './components/register/register.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/update_ocupacao/:id" element={<TelaPresenca />} />
        <Route path="/aquario/:id" element={<Detalhes />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);