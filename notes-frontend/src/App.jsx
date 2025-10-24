import React, {useState} from "react";
import { Outlet } from 'react-router-dom'
import Header from "./components/header/header.jsx";
import './App.css'
import Home from './components/home/home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Home/>
  )
}

export default App;