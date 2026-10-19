
import React from 'react';
import { render, screen } from '@testing-library/react';
import { Logo } from '../../../components/atoms/Logo';

describe('Pruebas del componente Logo', () => {

    it('Debe mostrar correctamente la imagen del logo', () => {
        render(<Logo src="/logo.png" />);

        const logo = screen.getByAltText('El Caldero de la Abundancia');

        expect(logo.getAttribute('src')).toBe('/logo.png');
    });

    it('Debe utilizar el texto alternativo por defecto', () => {
        render(<Logo src="/logo.png" />);

        const logo = screen.getByAltText('El Caldero de la Abundancia');

        expect(logo.alt).toBe('El Caldero de la Abundancia');
    });

    it('Debe aplicar una clase CSS personalizada', () => {
        render(<Logo src="/logo.png" className="mi-logo" />);

        const logo = screen.getByAltText('El Caldero de la Abundancia');

        expect(logo.classList.contains('mi-logo')).toBe(true);
    });

});
