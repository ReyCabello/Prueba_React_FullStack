import { Enlace } from "../atoms/Enlace";

export function MenuNavegacion() {
    return (
        <nav aria-label="Navegacion principal">
            <div className="d-flex flex-wrap justify-content-center align-items-center">
                <div className="mx-3">
                    <Enlace texto="Inicio" destino="/" className="text-white text-decoration-none" />
                </div>
                <div className="mx-3">
                    <Enlace texto="Productos" destino="/productos" className="text-white text-decoration-none" />
                </div>
                <div className="mx-3">
                    <Enlace texto="Nosotros" destino="/nosotros" className="text-white text-decoration-none" />
                </div>
                <div className="mx-3">
                    <Enlace texto="Noticias" destino="/noticias" className="text-white text-decoration-none" />
                </div>
                <div className="mx-3">
                    <Enlace texto="Contacto" destino="/contacto" className="text-white text-decoration-none" />
                </div>
                <div className="mx-3">
                    <Enlace texto="Iniciar Sesión" destino="/login" className="text-white text-decoration-none" />
                </div>
                
            </div>
        </nav>
    )
}






