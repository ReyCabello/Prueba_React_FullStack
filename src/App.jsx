
import './App.css'
import { Header } from './components/organisms/Header'
import { Footer } from './components/organisms/Footer'
import { Nosotros } from './pages/Nosotros'
import { Noticias } from './pages/Noticias'

function App() {

  return (
    <>
      <Header />

      <Noticias />

      <Footer />
    </>

  )
}

export default App