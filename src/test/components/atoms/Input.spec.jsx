import React from 'react';
import { render, screen } from '@testing-library/react';
import { Input } from '../../../components/atoms/Input';

describe('Pruebas del componente Input', () => {

    it('Debe utilizar el tipo text por defecto', () => {
        render(<Input data-testid="campo-input" />);

        const input = screen.getByTestId('campo-input');

        expect(input.type).toBe('text');
    });

    it('Debe permitir cambiar el tipo a email', () => {
        render(<Input type="email" data-testid="campo-email" />);

        const input = screen.getByTestId('campo-email');

        expect(input.type).toBe('email');
    });

    it('Debe aplicar una clase CSS personalizada', () => {
        render(<Input className="mi-clase" data-testid="campo-clase" />);

        const input = screen.getByTestId('campo-clase');

        expect(input.classList.contains('mi-clase')).toBe(true);
    });

});