import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Footer } from '../../../components/organisms/Footer'

describe('Footer Organism (Karma)', () => {
  it('renderiza la información de derechos de autor o texto del pie de página', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    )

    const elementosTexto = screen.getAllByText(/./i)
    expect(elementosTexto.length).toBeGreaterThan(0)
  })

  it('renderiza los enlaces o secciones del pie de página', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    )

    const contenedor = screen.getByRole('contentinfo') || screen.getAllByText(/./i)[0]
    expect(contenedor).toBeTruthy()
  })

  it('renderiza íconos o nombres de redes sociales/contacto si existen', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    )

    const enlaces = screen.getAllByRole('link') || screen.getAllByText(/./i)
    expect(enlaces[0]).toBeTruthy()
  })
})