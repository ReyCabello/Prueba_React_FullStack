import { FormField } from '../molecules/FormField'
import { TextArea } from '../atoms/TextArea'
import Boton from '../atoms/Button'

export function ContactForm() {
    const manejarEnvio = (evento) => {
        evento.preventDefault()
        alert("Mensaje enviado correctamente")
    }

    return (
        <form
            onSubmit={manejarEnvio}
            className="bg-dark border border-warning rounded p-4"
        >
            <FormField
                label="Nombre Completo"
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Ej: Juan Pérez"
                className="mb-3 d-flex flex-column"
                required
            />

            <FormField
                label="Correo Electrónico"
                id="correo"
                name="correo"
                type="email"
                placeholder="Ej: usuario@correo.cl"
                className="mb-3 d-flex flex-column"
                required
            />

            <div className="mb-3">
                <label
                    htmlFor="mensaje"
                    className="form-label"
                >
                    Comentario o Mensaje *
                </label>

                <TextArea
                    id="mensaje"
                    nombre="mensaje"
                    placeholder="Escribe tu mensaje aquí..."
                    filas={5}
                />
            </div>

            <div className="text-center">
                <Boton
                    texto="Enviar Mensaje"
                    tipo="submit"
                    variante="warning"
                />
            </div>
        </form>
    )
}