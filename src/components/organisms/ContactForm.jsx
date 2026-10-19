import { FormField } from '../molecules/FormField'
import { TextArea } from '../atoms/TextArea'
import Boton from '../atoms/Button'

export function ContactForm() {

    const validarNombre = (nombre) => {
        nombre = nombre.trim()

        if (nombre.length < 3) {
            return false
        }

        for (let i = 0; i < nombre.length; i++) {
            const letra = nombre[i].toLowerCase()

            if (!"abcdefghijklmnñopqrstuvwxyzáéíóúü ".includes(letra)) {
                return false
            }
        }

        return true
    }

    const validarCorreo = (correo) => {
        correo = correo.trim()

        const partes = correo.split("@")

        if (partes.length !== 2) {
            return false
        }

        if (partes[0].length < 3) {
            return false
        }

        const dominio = partes[1]
        const posicionPunto = dominio.lastIndexOf(".")

        if (posicionPunto < 1) {
            return false
        }

        if (posicionPunto === dominio.length - 1) {
            return false
        }

        return true
    }

    const validarMensaje = (mensaje) => {
        mensaje = mensaje.trim()

        if (mensaje.length === 0) {
            return false
        }

        const palabras = mensaje.split(" ")
        const letrasPermitidas = "abcdefghijklmnñopqrstuvwxyzáéíóúü"
        let contador = 0

        for (let i = 0; i < palabras.length; i++) {
        let tieneLetra = false

        for (let j = 0; j < palabras[i].length; j++) {
            const caracter = palabras[i][j].toLowerCase()

            if (letrasPermitidas.includes(caracter)) {
                tieneLetra = true
            }
        }

        if (tieneLetra) {
            contador++
        }
    }

    if (contador < 5) {
        return false
    }

        return true
    }

    const manejarEnvio = (evento) => {
        evento.preventDefault()

        const nombre = evento.target.elements.nombre.value
        const correo = evento.target.elements.correo.value
        const mensaje = evento.target.elements.mensaje.value

        if (!validarNombre(nombre)) {
            alert("El nombre debe contener al menos 3 letras y no puede incluir números ni símbolos.")
            return
        }

        if (!validarCorreo(correo)) {
            alert("El correo debe tener al menos 3 caracteres antes del @ y un dominio con punto, como .cl o .com.")
            return
        }

        if (!validarMensaje(mensaje)){
            alert("El mensaje debe contener al menos 5 palabras.")
            return
        }

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