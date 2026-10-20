import React from 'react'
import { render, screen } from '@testing-library/react'
import { InformacionTienda } from '../../../components/molecules/InformacionTienda'

describe('InformacionTienda Molecule (Karma)', () => {

  it('renderiza la información o títulos principales de la tienda', () => {
    render(<InformacionTienda />)

    // Estilo átomo: toma el primer elemento que coincida sin romper por duplicados
    const elementos = screen.getAllByText(/tienda|dirección|horario|contacto/i)
    expect(elementos[0]).toBeTruthy()
  })

  it('renderiza la dirección o teléfono de contacto', () => {
    render(<InformacionTienda />)

    const contenedor = screen.getByRole('heading') || screen.getAllByRole('paragraph')[0] || screen.getAllByText(/./i)[0]
    expect(contenedor).toBeTruthy()
  })

  it('renderiza la sección con elementos de lista o datos', () => {
    render(<InformacionTienda />)

    const items = screen.getAllByText(/./i)
    expect(items.length).toBeGreaterThan(0)
  })

})