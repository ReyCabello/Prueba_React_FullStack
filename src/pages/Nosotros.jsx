import { HistoriaMision } from "../components/organisms/HistoriaMision"
import { EquipoDesarrollo } from "../components/organisms/EquipoDesarrollo"

export function Nosotros() {
    return (
        <main className="bg-dark text-white min-vh-10">
            <HistoriaMision />
            <EquipoDesarrollo />
        </main>
    )
}