import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Layout from './components/Layout';
import Intro from './components/intro';
import Home from './components/home';
import './App.css';

export default function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>

    </Layout>
  );
}

