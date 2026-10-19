
import './App.css'
import { Header } from './components/organisms/Header'
import { Footer } from './components/organisms/Footer'
import { Login } from './pages/Login'
import { Registro } from './pages/Registro'
import { Productos } from './pages/Productos'
import { Routes, Route } from 'react-router-dom'
import { Carrito } from './pages/Carrito'
import { Nosotros } from './pages/Nosotros'
import { Noticias } from './pages/Noticias'
import { Contacto } from './pages/Contacto'
import { Inicio } from './pages/Inicio'


function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/contacto" element={<Contacto />} />
        
      </Routes>

      <Footer />
    </>
  )
}

export default App
