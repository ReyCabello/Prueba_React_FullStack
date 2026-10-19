
import React from 'react';
import { render, screen } from '@testing-library/react';
import { NavLink } from '../../../components/atoms/NavLink';

describe('Pruebas del componente NavLink', () => {

    it('Debe mostrar correctamente el texto del enlace', () => {
        render(<NavLink>Inicio</NavLink>);

        const enlace = screen.getByText('Inicio');

        expect(enlace).toBeTruthy();
    });

    it('Debe aplicar la clase CSS nav-link', () => {
        render(<NavLink>Catálogo</NavLink>);

        const enlace = screen.getByText('Catálogo');

        expect(enlace.classList.contains('nav-link')).toBe(true);
    });

    it('Debe permitir cambiar la etiqueta HTML mediante as', () => {
        render(<NavLink as="span">Contacto</NavLink>);

        const enlace = screen.getByText('Contacto');

        expect(enlace.tagName).toBe('SPAN');
    });

});
