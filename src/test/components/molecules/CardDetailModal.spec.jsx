import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
// Importación por defecto sin llaves
import CardDetailModal from '../../../components/molecules/CardDetailModal'

describe('CardDetailModal Molecule (Karma)', () => {
  const mockCard = {
    name: 'Mago Oscuro',
    image: 'mago.jpg',
    description: 'El más poderoso en ataque y defensa.'
  }

  it('renderiza la información de la carta cuando show es true', () => {
    render(<CardDetailModal show={true} card={mockCard} handleClose={() => {}} />)
    expect(screen.getByText(/mago oscuro/i)).toBeTruthy()
  })

  it('no muestra el modal o sus elementos cuando show es false', () => {
    render(<CardDetailModal show={false} card={mockCard} handleClose={() => {}} />)
    expect(screen.queryByText(/mago oscuro/i)).toBeNull()
  })

  it('ejecuta la función handleClose al hacer clic en cerrar', () => {
    const mockClose = jasmine.createSpy('handleClose')
    render(<CardDetailModal show={true} card={mockCard} handleClose={mockClose} />)
    
    // Busca el botón de cerrar nativo de React-Bootstrap o por rol
    const btnCerrar = screen.getByRole('button', { name: /close/i }) || screen.getAllByRole('button')[0]
    fireEvent.click(btnCerrar)
    
    expect(mockClose).toHaveBeenCalled()
  })
})