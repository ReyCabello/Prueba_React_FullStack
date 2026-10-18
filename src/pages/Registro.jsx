
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FormField } from '../components/molecules/FormField'
import Boton from '../components/atoms/Button'
import { registrarUsuario } from '../utils/usuariosDemo'
import './Registro.css'

const dominiosPermitidos = [
    '@duoc.cl',
    '@profesor.duoc.cl',
    '@gmail.com',
]

function validarCorreo(correo) {
    const valor = correo.trim().toLowerCase()

    if (!valor) return 'El correo electrónico es obligatorio.'

    if (valor.length > 100) {
        return 'El correo no puede superar los 100 caracteres.'
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor)) {
        return 'Ingresa un correo electrónico válido.'
    }

    if (!dominiosPermitidos.some((dominio) => valor.endsWith(dominio))) {
        return 'Usa un correo @duoc.cl, @profesor.duoc.cl o @gmail.com.'
    }

    return ''
}

export function Registro() {
    const navigate = useNavigate()
    const [nombre, setNombre] = useState('')
    const [correo, setCorreo] = useState('')
    const [contrasena, setContrasena] = useState('')
    const [confirmacion, setConfirmacion] = useState('')
    const [errores, setErrores] = useState({})
    const [mensaje, setMensaje] = useState('')

    function handleSubmit(event) {
        event.preventDefault()

        const nuevosErrores = {
        nombre: nombre.trim() ? '' : 'El nombre es obligatorio.',
        correo: validarCorreo(correo),
        contrasena:
            contrasena.length < 4 || contrasena.length > 10
            ? 'La contraseña debe tener entre 4 y 10 caracteres.'
            : '',
        confirmacion:
            confirmacion !== contrasena
            ? 'Las contraseñas no coinciden.'
            : '',
        }

        setErrores(nuevosErrores)
        setMensaje('')

        if (Object.values(nuevosErrores).some(Boolean)) return

        const resultado = registrarUsuario({
        nombre,
        correo,
        contrasena,
        })

        if (!resultado.ok) {
        setErrores((prev) => ({
            ...prev,
            correo: resultado.mensaje,
        }))
        return
        }

        setMensaje(resultado.mensaje)

        setTimeout(() => {
        navigate('/login')
        }, 1000)
    }

    return (
        <main className="registro-page container-fluid py-5">
        <div className="row justify-content-center">
            <div className="col-12 col-sm-10 col-md-7 col-lg-5 col-xl-4">
            <section className="registro-card">
                <h1 className="registro-title text-center">
                Crear una cuenta
                </h1>

                <p className="registro-subtitle text-center">
                ¡Únete a la aventura de Mitos y Leyendas!
                </p>

                <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                    <FormField
                    label="Nombre"
                    id="registro-nombre"
                    name="nombre"
                    placeholder="Ingresa tu nombre"
                    autoComplete="name"
                    value={nombre}
                    maxLength={80}
                    required
                    onChange={(e) => setNombre(e.target.value)}
                    />
                    {errores.nombre && (
                    <p className="registro-error" role="alert">
                        {errores.nombre}
                    </p>
                    )}
                </div>

                <div className="mb-3">
                    <FormField
                    label="Correo electrónico"
                    id="registro-email"
                    name="email"
                    type="email"
                    placeholder="Ingresa tu correo"
                    autoComplete="email"
                    value={correo}
                    maxLength={100}
                    required
                    onChange={(e) => setCorreo(e.target.value)}
                    />
                    {errores.correo && (
                    <p className="registro-error" role="alert">
                        {errores.correo}
                    </p>
                    )}
                </div>

                <div className="mb-3">
                    <FormField
                    label="Contraseña"
                    id="registro-password"
                    name="password"
                    type="password"
                    autoComplete="new-password"
                    placeholder="Entre 4 y 10 caracteres"
                    value={contrasena}
                    maxLength={10}
                    required
                    onChange={(e) => setContrasena(e.target.value)}
                    />
                    {errores.contrasena && (
                    <p className="registro-error" role="alert">
                        {errores.contrasena}
                    </p>
                    )}
                </div>

                <div className="mb-4">
                    <FormField
                    label="Confirmar contraseña"
                    id="registro-confirmacion"
                    name="confirmacion"
                    type="password"
                    autoComplete="new-password"
                    placeholder="Repite tu contraseña"
                    value={confirmacion}
                    maxLength={10}
                    required
                    onChange={(e) => setConfirmacion(e.target.value)}
                    />
                    {errores.confirmacion && (
                    <p className="registro-error" role="alert">
                        {errores.confirmacion}
                    </p>
                    )}
                </div>

                <div className="d-grid">
                    <Boton
                    texto="CREAR CUENTA"
                    tipo="submit"
                    variante="dark"
                    />
                </div>

                {mensaje && (
                    <p className="registro-success mt-3" role="status">
                    {mensaje}
                    </p>
                )}
                </form>

                <p className="text-center mt-4 mb-0">
                ¿Ya tienes cuenta?{' '}
                <Link className="registro-link" to="/login">
                    Inicia sesión
                </Link>
                </p>
            </section>
            </div>
        </div>
        </main>
    )
}
