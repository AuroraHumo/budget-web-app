
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './components/home'
import  Header  from './components/header'
import ServicesComponent from './components/servicesComponent'
import './App.css'

export default function App() {
  
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/budget" element={<ServicesComponent />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />

      </Routes>
    </BrowserRouter>

  )
}

