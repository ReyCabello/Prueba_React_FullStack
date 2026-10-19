
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Contador } from '../../../components/atoms/Contador';

describe('Pruebas del componente Contador', () => {

    it('Debe mostrar correctamente el número del contador', () => {
        render(<Contador>5</Contador>);

        const contador = screen.getByText('5');

        expect(contador).toBeTruthy();
    });

    it('Debe aplicar la clase badge de Bootstrap', () => {
        render(<Contador>10</Contador>);

        const contador = screen.getByText('10');

        expect(contador.classList.contains('badge')).toBe(true);
    });

    it('Debe aplicar una clase CSS personalizada', () => {
        render(<Contador className="bg-danger">3</Contador>);

        const contador = screen.getByText('3');

        expect(contador.classList.contains('bg-danger')).toBe(true);
    });

});

