import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { SelectFormField } from '../../../components/molecules/SelectFormField'

describe('SelectFormField Molecule (Karma)', () => {
  const mockOptions = [
    { value: '1', label: 'Opción 1' },
    { value: '2', label: 'Opción 2' }
  ]

  it('renderiza la etiqueta label y el elemento select', () => {
    render(<SelectFormField label="Categoría" name="categoria" options={mockOptions} value="" onChange={() => {}} />)
    expect(screen.getByText('Categoría')).toBeTruthy()
  })

  it('muestra el asterisco cuando la prop required es true', () => {
    render(<SelectFormField label="Categoría" name="categoria" options={mockOptions} required value="" onChange={() => {}} />)
    expect(screen.getByText('*')).toBeTruthy()
  })

  it('ejecuta la función onChange al seleccionar una opción', () => {
    const mockChange = jasmine.createSpy('onChange')
    render(<SelectFormField label="Categoría" name="categoria" options={mockOptions} value="" onChange={mockChange} />)
    const select = screen.getByRole('combobox')
    fireEvent.change(select, { target: { value: '1' } })
    expect(mockChange).toHaveBeenCalled()
  })
})