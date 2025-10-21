import React from 'react'
import { StrictMode } from 'react'
import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route, createRoot } from 'react-dom/client'
import App from './App.jsx'
import Home from "./components/home/home.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
        <Route index element={<Home />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);