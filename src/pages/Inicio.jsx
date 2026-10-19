import { BienvenidaInicio } from "../components/organisms/BienvenidaInicio"
import { ProductosDestacados } from '../components/organisms/ProductosDestacados'
import { PresentacionTienda } from '../components/organisms/PresentacionTienda'

export function Inicio() {
    return (
        <main className="bg-dark text-white min-vh-100">
            <BienvenidaInicio />
            <ProductosDestacados />
            <PresentacionTienda />
        </main>
    )
}