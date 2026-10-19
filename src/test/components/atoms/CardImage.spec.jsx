import React from 'react';
import { render, screen } from '@testing-library/react';
import { CardImage } from '../../../components/atoms/CardImage';

describe('Pruebas del componente CardImage', () => {

    it('Debe mostrar la imagen con su src y alt correctamente', () => {
        render(<CardImage src="/carta.jpg" alt="Carta de prueba" />);

        const imagen = screen.getByAltText('Carta de prueba');

        expect(imagen.getAttribute('src')).toBe('/carta.jpg');
    });

    it('Debe aplicar correctamente una clase CSS personalizada', () => {
        render(<CardImage src="/carta.jpg" alt="Carta" className="mi-clase" />);

        const imagen = screen.getByAltText('Carta');

        expect(imagen.classList.contains('mi-clase')).toBe(true);
    });

    it('Debe ejecutar la función onClick al presionar la imagen', () => {
        const funcionClick = jasmine.createSpy('funcionClick');

        render(<CardImage src="/carta.jpg" alt="Carta" onClick={funcionClick} />);

        const imagen = screen.getByAltText('Carta');

        imagen.click();

        expect(funcionClick).toHaveBeenCalled();
    });

});