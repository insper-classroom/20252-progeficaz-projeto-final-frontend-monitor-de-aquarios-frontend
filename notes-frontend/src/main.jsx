import React from 'react'
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Home from "./components/home/home.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        <Route index element={<Home />}/>
        <Route index element={<Header />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);