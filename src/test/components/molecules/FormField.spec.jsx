import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { FormField } from '../../../components/molecules/FormField'

describe('FormField Molecule (Karma)', () => {
  it('renderiza la etiqueta label y el campo input correctamente', () => {
    render(<FormField label="Correo" name="email" value="" onChange={() => {}} />)
    expect(screen.getByText('Correo')).toBeTruthy()
  })

  it('muestra el asterisco cuando la prop required es true', () => {
    render(<FormField label="Correo" name="email" required value="" onChange={() => {}} />)
    expect(screen.getByText('*')).toBeTruthy()
  })

  it('ejecuta la función onChange al escribir en el campo', () => {
    const mockChange = jasmine.createSpy('onChange')
    render(<FormField label="Correo" name="email" value="" onChange={mockChange} />)
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'test@correo.com' } })
    expect(mockChange).toHaveBeenCalled()
  })
})