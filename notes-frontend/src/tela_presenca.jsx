import React, {useState} from "react";
import './App.css'
import Botao_presenca from './components/botao_presenca/botao_aquario.jsx'

function TelaPresenca() {
  const [count, setCount] = useState(0)

  return (
    <Botao_presenca/>
  )
}

export default TelaPresenca;