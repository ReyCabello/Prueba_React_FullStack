const CLAVE_USUARIOS = 'mitosUsuariosDemo'

export function obtenerUsuarios() {
    try {
        const usuarios = JSON.parse(
        localStorage.getItem(CLAVE_USUARIOS) || '[]'
        )

        return Array.isArray(usuarios) ? usuarios : []
    } catch {
        return []
    }
}

export function registrarUsuario(usuario) {
    const usuarios = obtenerUsuarios()
    const correo = usuario.correo.trim().toLowerCase()

    const existe = usuarios.some(
        (item) => item.correo.toLowerCase() === correo
    )

    if (existe) {
        return {
        ok: false,
        mensaje: 'Ya existe una cuenta con ese correo.',
        }
    }

    usuarios.push({
        nombre: usuario.nombre.trim(),
        correo,
        contrasena: usuario.contrasena,
    })

    localStorage.setItem(
        CLAVE_USUARIOS,
        JSON.stringify(usuarios)
    )

    return {
        ok: true,
        mensaje: '¡Cuenta creada correctamente!',
    }
}

export function iniciarSesion(correo, contrasena) {
    const usuario = obtenerUsuarios().find(
        (item) =>
        item.correo.toLowerCase() === correo.trim().toLowerCase() &&
        item.contrasena === contrasena
    )

    if (!usuario) {
        return {
        ok: false,
        mensaje: 'Correo o contraseña incorrectos.',
        }
    }

    return {
        ok: true,
        usuario: {
        nombre: usuario.nombre,
        correo: usuario.correo,
        },
    }
}