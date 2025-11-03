import React from 'react'
import { useParams } from "react-router-dom";
import CartaoDetalhes from './components/cartaoDetalhes/cartaoDetalhes';

const Detalhes = () => {
    const { id } = useParams();
  return (
    <div>
      <CartaoDetalhes id = {id}/>
    </div>
  )
}

export default Detalhes
