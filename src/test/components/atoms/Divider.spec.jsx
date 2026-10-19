
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Divider } from '../../../components/atoms/Divider';

describe('Pruebas del componente Divider', () => {

    it('Debe renderizar correctamente una línea horizontal', () => {
        render(<Divider data-testid="divider" />);

        const divider = screen.getByTestId('divider');

        expect(divider.tagName).toBe('HR');
    });

    it('Debe aplicar la clase CSS divider', () => {
        render(<Divider data-testid="divider" />);

        const divider = screen.getByTestId('divider');

        expect(divider.classList.contains('divider')).toBe(true);
    });

    it('Debe aplicar una clase CSS personalizada', () => {
        render(<Divider className="mi-clase" data-testid="divider" />);

        const divider = screen.getByTestId('divider');

        expect(divider.classList.contains('mi-clase')).toBe(true);
    });

});
