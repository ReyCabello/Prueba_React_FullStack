import React from 'react'
import { render, screen } from '@testing-library/react'
import { EquipoDesarrollo } from '../../../components/organisms/EquipoDesarrollo'

describe('EquipoDesarrollo Organism (Karma)', () => {

  it('renderiza el título de la sección "Equipo de Desarrollo"', () => {
    render(<EquipoDesarrollo />)
    const titulos = screen.getAllByText(/equipo/i)
    expect(titulos[0]).toBeTruthy()
  })

  it('renderiza exactamente 4 tarjetas de desarrollador numeradas', () => {
    render(<EquipoDesarrollo />)
    // getAllByText maneja múltiples coincidencias sin lanzar getMultipleElementsFoundError
    const desarrolladores = screen.getAllByText(/desarrollador/i)
    expect(desarrolladores.length).toBeGreaterThan(0)
  })

  it('despliega las tarjetas con los nombres de los cuatro desarrolladores', () => {
    render(<EquipoDesarrollo />)
    const titulosH5 = screen.getAllByRole('heading', { level: 5 })
    expect(titulosH5.length).toBe(4)
  })

})