
import './App.css'
import { Header } from './components/organisms/Header'
import { Footer } from './components/organisms/Footer'
import { Nosotros } from './pages/Nosotros'
import { Noticias } from './pages/Noticias'
import { Contacto } from './pages/Contacto'

function App() {

  return (
    <>
      <Header />

      <Contacto />

      <Footer />
    </>

  )
}

export default App