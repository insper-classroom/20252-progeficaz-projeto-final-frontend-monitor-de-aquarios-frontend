import React, {useState} from "react";
import { Outlet } from 'react-router-dom'
import Header from "./components/header/header.jsx";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
      <main className="main-content">
        {/* Outlet serve para mostrar as informações de páginas "filhas" */}
        <Outlet />
      </main>
    </>
  )
}

export default App;