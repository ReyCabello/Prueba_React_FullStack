import { useNavigate } from 'react-router-dom'
import Button from '../atoms/Button'

export function PresentacionTienda() {
    const navegar = useNavigate()

    return (
        <section className="container text-center py-5">
            <h2 className="text-warning mb-4">
                Sobre nuestra tienda
            </h2>

            <p className="text-white fs-5 mb-4">
                En El Caldero de la Abundancia
                nos apasionan las cartas de Mitos y Leyendas.
                Queremos ayudarte a encontrar las cartas
                que necesitas para tu colección y tus mazos.
            </p>

            <Button
                texto="Conoce nuestra tienda"
                tipo="button"
                variante="warning"
                onClick={() => navegar('/nosotros')}
            />
        </section>
    )
}