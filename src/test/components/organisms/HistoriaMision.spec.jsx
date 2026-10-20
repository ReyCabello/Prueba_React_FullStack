import React from 'react'
import { render, screen } from '@testing-library/react'
import { HistoriaMision } from '../../../components/organisms/HistoriaMision'

describe('HistoriaMision Organism (Karma)', () => {
  it('renderiza el título "Nuestra Historia y Misión"', () => {
    render(<HistoriaMision />)
    const titulo = screen.getByRole('heading', { level: 2 })
    expect(titulo).toBeTruthy()
  })

  it('despliega la información sobre la misión', () => {
    render(<HistoriaMision />)
    expect(screen.getByText(/nuestra misión/i)).toBeTruthy()
  })

  it('renderiza la imagen o elementos decorativos', () => {
    render(<HistoriaMision />)
    expect(screen.getByRole('img')).toBeTruthy()
  })
})