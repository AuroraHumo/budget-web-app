
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Intro from './components/intro'
import Home from "./components/home";
import Header from './components/header'
import './App.css'

export default function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />

      </Routes>
    </BrowserRouter>

  )
}

