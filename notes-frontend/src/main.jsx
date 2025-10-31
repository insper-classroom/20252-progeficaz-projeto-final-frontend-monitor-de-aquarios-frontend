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
				{/* aqui vamos passar o id do aquario que queremos trocar o status por meio da rota, assim quando acessarmos essa rota pelo qr code vamos entrar na pagina do aquario desejado  */}
				<Route path="/update_ocupacao/:id" element={<bota />}></Route> 
        <Route index element={<Home />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);