import React from 'react'
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Home from "./components/home/home.jsx"
import Botao_presenca from './components/botao_presenca/botao_aquario.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
				<Route path="/" element={<bota />}></Route>
        <Route index element={<Home />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);