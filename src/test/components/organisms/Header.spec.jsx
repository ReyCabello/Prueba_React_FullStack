import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Header } from '../../../components/organisms/Header'

describe('Header Organism (Karma)', () => {

  it('renderiza el logo o marca dentro del encabezado', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    const logos = screen.getAllByRole('heading') || screen.getAllByText(/tienda/i)
    expect(logos[0]).toBeTruthy()
  })

  it('renderiza el menú de navegación principal', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    // getAllByText resuelve la falla de getMultipleElementsFoundError
    const elementosInicio = screen.getAllByText(/inicio/i)
    expect(elementosInicio[0]).toBeTruthy()
  })

  it('renderiza la barra de búsqueda o acciones de usuario si corresponden', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    const elementosHeader = screen.getAllByRole('banner')[0] || screen.getAllByRole('link')[0]
    expect(elementosHeader).toBeTruthy()
  })

})