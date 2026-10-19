import { useNavigate } from 'react-router-dom'
import Button from '../atoms/Button'

export function BienvenidaInicio() {
    const navegar = useNavigate()

    return (
        <section className="container text-center py-5">
            <h2 className="text-warning mb-4">
                ¡Encuentra las cartas que buscas!
            </h2>

            <p className="text-white fs-5 mb-4">
                Bienvenido a tu tienda de Singles
                de Mitos y Leyendas.
                Encuentra las cartas que necesitas
                para completar tu colección.
            </p>

            <Button
                texto="Explorar productos"
                tipo="button"
                variante="warning"
                onClick={() => navegar('/productos')}
            />
        </section>
    )
}