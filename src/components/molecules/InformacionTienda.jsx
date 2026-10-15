import { Text } from "../atoms/Text";

export function InformacionTienda() {
    return (
        <div>
            <Text
                texto="El Caldero de la Abundancia"
                etiqueta="h3"
                className="fs-5 mb-3"
                style={{ color: '#D4AF37'}}                
            />

            <Text
                texto="© 2026 Todos los derechos reservados."
                etiqueta="p"
                className="text-white mb-2"
            />

            <Text
                texto="Tu tienda de Singles número uno en Chile."
                etiqueta="p"
                className="text-white mb-0"
            />
        </div>
    )
}