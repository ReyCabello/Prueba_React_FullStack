
import './App.css'
import { Header } from './components/organisms/Header'
import { Footer } from './components/organisms/Footer'
import { Login } from './pages/Login'
import { Registro } from './pages/Registro'
import { Productos } from './pages/Productos'
import { Routes, Route } from 'react-router-dom'
import { Carrito } from './pages/Carrito'

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
