
import './App.css'
import { Header } from './components/organisms/Header'
import { Footer } from './components/organisms/Footer'

function App() {

  return (
    <>
      <Header />

      <main className='container py-5'>
        <h2 className='text-center'>
          Bienvenido al Caldero de la Abundancia
        </h2>
      </main>

      <Footer />
    </>

  )
}

export default App