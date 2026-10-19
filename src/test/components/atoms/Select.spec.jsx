
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Select } from '../../../components/atoms/Select';

describe('Pruebas del componente Select', () => {

    it('Debe mostrar correctamente las opciones', () => {
        const opciones = [
            { value: 'agua', label: 'Agua' },
            { value: 'fuego', label: 'Fuego' }
        ];

        render(<Select options={opciones} />);

        expect(screen.getByText('Agua')).toBeTruthy();
        expect(screen.getByText('Fuego')).toBeTruthy();
    });

    it('Debe aplicar la clase CSS form-select', () => {
        render(<Select />);

        const select = screen.getByRole('combobox');

        expect(select.classList.contains('form-select')).toBe(true);
    });

    it('Debe permitir agregar una clase CSS personalizada', () => {
        render(<Select className="mi-select" />);

        const select = screen.getByRole('combobox');

        expect(select.classList.contains('mi-select')).toBe(true);
    });

});
