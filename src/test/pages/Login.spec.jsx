
import { render, screen, fireEvent } from '@testing-library/react'
import { Login } from '../../pages/Login'
import { MemoryRouter } from 'react-router-dom'

describe('Pruebas unitarias de Login', () => {
    beforeEach(() => {
        sessionStorage.clear()
    })

    it('debe mostrar el título de inicio de sesión', () => {
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        )

        expect(screen.getByText('Iniciar sesión')).toBeTruthy()
    })

    it('debe mostrar un error si el correo está vacío', () => {
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        )

        fireEvent.click(screen.getByText('ENTRAR A LA AVENTURA'))

        expect(
            screen.getByText('El correo electrónico es obligatorio.')
        ).toBeTruthy()
    })

    it('debe mostrar un error si la contraseña está vacía', () => {
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        )

        fireEvent.click(screen.getByText('ENTRAR A LA AVENTURA'))

        expect(
            screen.getByText('La contraseña es obligatoria.')
        ).toBeTruthy()
    })

    it('debe rechazar un correo de dominio no permitido', () => {
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        )

        fireEvent.change(screen.getByPlaceholderText('Ingresa tu correo'), {
            target: { value: 'persona@outlook.com' },
        })

        fireEvent.change(screen.getByPlaceholderText('Ingresa tu contraseña'), {
            target: { value: 'abcd' },
        })

        fireEvent.click(screen.getByText('ENTRAR A LA AVENTURA'))

        expect(
            screen.getByText(
                'Usa un correo @duoc.cl, @profesor.duoc.cl o @gmail.com.'
            )
        ).toBeTruthy()
    })

    it('debe rechazar una contraseña demasiado corta', () => {
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        )

        fireEvent.change(screen.getByPlaceholderText('Ingresa tu correo'), {
            target: { value: 'persona@gmail.com' },
        })

        fireEvent.change(screen.getByPlaceholderText('Ingresa tu contraseña'), {
            target: { value: 'abc' },
        })

        fireEvent.click(screen.getByText('ENTRAR A LA AVENTURA'))

        expect(
            screen.getByText(
                'La contraseña debe tener entre 4 y 10 caracteres.'
            )
        ).toBeTruthy()
    })
})
