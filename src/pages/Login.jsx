import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FormField } from '../components/molecules/FormField'
import Boton from '../components/atoms/Button'
import { iniciarSesion } from '../utils/usuariosDemo'
import './Login.css'
import { useNavigate } from 'react-router-dom';

const dominiosPermitidos = [
    '@duoc.cl',
    '@profesor.duoc.cl',
    '@gmail.com',
]

function validarCorreo(correo) {
    const valor = correo.trim().toLowerCase()

    if (!valor) {
        return 'El correo electrónico es obligatorio.'
    }

    if (valor.length > 100) {
        return 'El correo no puede superar los 100 caracteres.'
    }

    const formatoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor)

    if (!formatoValido) {
        return 'Ingresa un correo electrónico válido.'
    }

    const dominioPermitido = dominiosPermitidos.some((dominio) =>
        valor.endsWith(dominio),
    )

    if (!dominioPermitido) {
        return 'Usa un correo @duoc.cl, @profesor.duoc.cl o @gmail.com.'
    }

    return ''
}

function validarContrasena(contrasena) {
    if (!contrasena) {
        return 'La contraseña es obligatoria.'
    }

    if (contrasena.length < 4 || contrasena.length > 10) {
        return 'La contraseña debe tener entre 4 y 10 caracteres.'
    }

    return ''
}

export function Login({ onLogin }) {
    const [correo, setCorreo] = useState('')
    const [contrasena, setContrasena] = useState('')
    const [errores, setErrores] = useState({})
    const [mensaje, setMensaje] = useState('')

    const navigate = useNavigate();

    const handleSubmit = (event) => {
    event.preventDefault()

    const nuevosErrores = {
        correo: validarCorreo(correo),
        contrasena: validarContrasena(contrasena),
        }

        setErrores(nuevosErrores)
        setMensaje('')

        if (nuevosErrores.correo || nuevosErrores.contrasena) {
        return
        }

        if (correo === 'admin@gmail.com' && contrasena === 'admin123') {
            sessionStorage.setItem('usuarioActual', JSON.stringify({ correo, rol: 'admin' }));
            if (onLogin) onLogin(true);
            navigate('/inventario')
            return
        }

        const resultado = iniciarSesion(correo, contrasena)
        
        if (resultado.ok) {
          const usuarioSesion = { ...resultado.usuario, rol: 'usuario' }
          sessionStorage.setItem('usuarioActual', JSON.stringify(usuarioSesion))
          if (onLogin) onLogin(true)
          navigate('/productos')
        } else {
          setMensaje(resultado.mensaje)
        }
    }


    return (
        <main className="login-page container-fluid py-5">
        <div className="row justify-content-center align-items-center">
            <div className="col-12 col-sm-10 col-md-7 col-lg-5 col-xl-4">
            <section className="login-card">
                <div className="login-logo">
                <img
                    src="/src/assets/logo-mitos.png"
                    alt="Mitos y Leyendas"
                    className="login-logo-img"
                />
                </div>

                <h1 className="login-title text-center">
                Iniciar sesión
                </h1>

                <p className="login-subtitle text-center">
                ¡Tu próxima aventura te espera!
                </p>

                <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                    <FormField
                    label="Correo electrónico"
                    id="login-email"
                    name="email"
                    type="email"
                    placeholder="Ingresa tu correo"
                    autoComplete="email"
                    value={correo}
                    maxLength={100}
                    required
                    onChange={(event) => {
                        setCorreo(event.target.value)
                        setErrores((prev) => ({ ...prev, correo: '' }))
                        setMensaje('')
                    }}
                    />
                    {errores.correo && (
                    <p className="login-error" role="alert">
                        {errores.correo}
                    </p>
                    )}
                </div>

                <div className="mb-3">
                    <FormField
                    label="Contraseña"
                    id="login-password"
                    name="password"
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    autoComplete="current-password"
                    value={contrasena}
                    maxLength={10}
                    required
                    onChange={(event) => {
                        setContrasena(event.target.value)
                        setErrores((prev) => ({ ...prev, contrasena: '' }))
                        setMensaje('')
                    }}
                    />
                    {errores.contrasena && (
                    <p className="login-error" role="alert">
                        {errores.contrasena}
                    </p>
                    )}
                </div>

                <div className="text-end mb-4">
                    <a className="login-link" href="#recuperar">
                    ¿Olvidaste tu contraseña?
                    </a>
                </div>

                <div className="d-grid">
                    <Boton
                    texto="ENTRAR A LA AVENTURA"
                    tipo="submit"
                    onClick={handleSubmit}
                    variante="dark"
                    />
                </div>

                {mensaje && (
                    <p className="login-success mt-3" role="status">
                    {mensaje}
                    </p>
                )}
                </form>

                <div className="login-divider">
                <span>¿Aún no tienes cuenta?</span>
                </div>

                <p className="text-center mb-0">
                <Link className="login-link" to="/registro">
                    Crear una cuenta
                </Link>
                </p>
            </section>
            </div>
        </div>
        </main>
    )
}
