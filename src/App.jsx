import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import { Header } from './components/organisms/Header';
import { Footer } from './components/organisms/Footer';
import { Login } from './pages/Login';
import { Registro } from './pages/Registro';
import { Productos } from './pages/Productos';
import { Carrito } from './pages/Carrito';
import { Inventario } from './pages/Inventario';
import { Nosotros } from './pages/Nosotros.jsx';
import { Noticias } from './pages/Noticias.jsx';
import { Contacto } from './pages/Contacto.jsx';
import { ProtectedRoute } from './components/ProtectedRoute.jsx';

export default function App() {
  const [isAdmin, setIsAdmin] = useState(() => {
    return localStorage.getItem('is_admin') === 'true';
  });

  const handleLogin = (adminStatus) => {
    setIsAdmin(adminStatus);
    localStorage.setItem('is_admin', adminStatus ? 'true' : 'false');
  };

  const handleLogout = () => {
    setIsAdmin(false);
    localStorage.removeItem('is_admin');
  };

  return (
    <>
      <Header isAdmin={isAdmin} onLogout={handleLogout} />

      <main>
        <Routes>
          <Route path="/" element={<div className="container text-white py-4">Página de Inicio</div>} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />

          <Route 
            path="/inventario" 
            element={
              <ProtectedRoute isAdmin={isAdmin}>
                <Inventario />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}