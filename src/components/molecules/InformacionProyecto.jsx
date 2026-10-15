import { Text } from "../atoms/Text";

export function InformacionProyecto(){
    return (
        <div>
            <Text
                texto="Prueba 2"
                etiqueta="h3"
                className="fs-5 mb-3"
                style={{ color: '#D4AF37'}}
            />

            <Text
                texto="Asignatura: Desarrollo Fullstack II (DSY1104)"
                etiqueta="p"
                className="text-white mb-2"
            />

            <Text
                texto="Diseñado por: Eduardo Barrera, Reynaldo Cabello, Ángela Robles y Francisco Vera."
                etiqueta="p"
            className="text-white mb-2"
            />
            <Text
                texto="Duoc UC - 2026"
                etiqueta="p"
                className="text-white mb-0"
            />
        </div>
    )
}