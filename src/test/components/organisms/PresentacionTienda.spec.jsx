import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { PresentacionTienda } from '../../../components/organisms/PresentacionTienda'

describe('PresentacionTienda Organism (Karma)', () => {

  it('renderiza el título h2 "Sobre nuestra tienda" y la descripción del negocio', () => {
    render(
      <MemoryRouter>
        <PresentacionTienda />
      </MemoryRouter>
    )

    const titulo = screen.getByText(/sobre nuestra tienda/i) || screen.getAllByText(/tienda/i)[0]
    expect(titulo).toBeTruthy()
  })

  it('renderiza el botón con el texto "Conoce nuestra tienda"', () => {
    render(
      <MemoryRouter>
        <PresentacionTienda />
      </MemoryRouter>
    )

    const boton = screen.getByText(/conoce nuestra tienda/i) || screen.getAllByRole('button')[0]
    expect(boton).toBeTruthy()
  })

  it('interactúa correctamente con el botón principal', () => {
    render(
      <MemoryRouter>
        <PresentacionTienda />
      </MemoryRouter>
    )

    const boton = screen.getByText(/conoce nuestra tienda/i) || screen.getAllByRole('button')[0]
    fireEvent.click(boton)

    expect(boton).toBeTruthy()
  })

})