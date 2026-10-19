
import React from 'react';
import { render, screen } from '@testing-library/react';
import { PriceTag } from '../../../components/atoms/PriceTag';

describe('Pruebas del componente PriceTag', () => {

    it('Debe mostrar correctamente el precio en pesos chilenos', () => {
        render(<PriceTag price={15000} />);

        const precio = screen.getByText('$15.000');

        expect(precio).toBeTruthy();
    });

    it('Debe utilizar amount cuando se proporcionan price y amount', () => {
        render(<PriceTag price={10000} amount={25000} />);

        const precio = screen.getByText('$25.000');

        expect(precio).toBeTruthy();
    });

    it('Debe mostrar cero cuando no se proporciona un precio', () => {
        render(<PriceTag />);

        const precio = screen.getByText('$0');

        expect(precio).toBeTruthy();
    });

});
