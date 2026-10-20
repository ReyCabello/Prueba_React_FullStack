import { render, screen, fireEvent } from '@testing-library/react'
import { Registro } from '../../pages/Registro'
import { MemoryRouter } from 'react-router-dom'

describe('Pruebas unitarias de Registro', () => {
    beforeEach(() => {
        localStorage.clear()
        sessionStorage.clear()
    })

    it('debe mostrar el título de registro', () => {
        render(
            <MemoryRouter>
                <Registro />
            </MemoryRouter>
        )

        expect(screen.getByText('Crear una cuenta')).toBeTruthy()
    })

    it('debe mostrar un error si el nombre está vacío', () => {
        render(
            <MemoryRouter>
                <Registro />
            </MemoryRouter>
        )

        fireEvent.click(screen.getByRole('button', { name: /crear cuenta/i }))

        expect(screen.getByText('El nombre es obligatorio.')).toBeTruthy()
    })

    it('debe mostrar un error si el correo está vacío', () => {
        render(
            <MemoryRouter>
                <Registro />
            </MemoryRouter>
        )

        fireEvent.click(screen.getByRole('button', { name: /crear cuenta/i }))

        expect(screen.getByText('El correo electrónico es obligatorio.')).toBeTruthy()
    })

    it('debe rechazar una contraseña demasiado corta', () => {
        render(
            <MemoryRouter>
                <Registro />
            </MemoryRouter>
        )

        fireEvent.change(document.getElementById('registro-nombre'), {
            target: { value: 'Usuario Prueba' },
        })
        fireEvent.change(document.getElementById('registro-email'), {
            target: { value: 'persona@gmail.com' },
        })
        fireEvent.change(document.getElementById('registro-password'), {
            target: { value: 'abc' },
        })
        fireEvent.change(document.getElementById('registro-confirmacion'), {
            target: { value: 'abc' },
        })

        fireEvent.click(screen.getByRole('button', { name: /crear cuenta/i }))

        expect(
            screen.getByText('La contraseña debe tener entre 4 y 10 caracteres.')
        ).toBeTruthy()
    })

    it('debe mostrar un error si las contraseñas no coinciden', () => {
        render(
            <MemoryRouter>
                <Registro />
            </MemoryRouter>
        )

        fireEvent.change(document.getElementById('registro-nombre'), {
            target: { value: 'Usuario Prueba' },
        })
        fireEvent.change(document.getElementById('registro-email'), {
            target: { value: 'persona@gmail.com' },
        })
        fireEvent.change(document.getElementById('registro-password'), {
            target: { value: 'abcd' },
        })
        fireEvent.change(document.getElementById('registro-confirmacion'), {
            target: { value: 'efgh' },
        })

        fireEvent.click(screen.getByRole('button', { name: /crear cuenta/i }))

        expect(screen.getByText('Las contraseñas no coinciden.')).toBeTruthy()
    })
})
