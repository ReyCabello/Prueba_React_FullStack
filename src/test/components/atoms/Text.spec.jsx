
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Text } from '../../../components/atoms/Text';

describe('Pruebas del componente Text', () => {

    it('Debe mostrar correctamente el texto recibido', () => {
        render(<Text texto="Bienvenido al Caldero" />);

        const texto = screen.getByText('Bienvenido al Caldero');

        expect(texto).toBeTruthy();
    });

    it('Debe utilizar la etiqueta span por defecto', () => {
        render(<Text texto="Hola mundo" />);

        const texto = screen.getByText('Hola mundo');

        expect(texto.tagName).toBe('SPAN');
    });

    it('Debe permitir cambiar la etiqueta HTML', () => {
        render(<Text texto="Nuestros productos" etiqueta="h2" />);

        const texto = screen.getByText('Nuestros productos');

        expect(texto.tagName).toBe('H2');
    });

});
