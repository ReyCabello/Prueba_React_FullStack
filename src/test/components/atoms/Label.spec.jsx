
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Label } from '../../../components/atoms/Label';

describe('Pruebas del componente Label', () => {

    it('Debe mostrar correctamente el texto de la etiqueta', () => {
        render(<Label>Correo electrónico</Label>);

        const label = screen.getByText('Correo electrónico');

        expect(label).toBeTruthy();
    });

    it('Debe aplicar la clase CSS personalizada', () => {
        render(<Label className="mi-clase">Nombre</Label>);

        const label = screen.getByText('Nombre');

        expect(label.classList.contains('mi-clase')).toBe(true);
    });

    it('Debe asociarse correctamente a un campo mediante htmlFor', () => {
        render(<Label htmlFor="correo">Correo</Label>);

        const label = screen.getByText('Correo');

        expect(label.htmlFor).toBe('correo');
    });

});
