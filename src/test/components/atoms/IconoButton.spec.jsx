
import React from 'react';
import { render, screen } from '@testing-library/react';
import { IconButton } from '../../../components/atoms/IconoButton';

describe('Pruebas del componente IconButton', () => {

    it('Debe mostrar correctamente el contenido del botón', () => {
        render(<IconButton>Buscar</IconButton>);

        const boton = screen.getByText('Buscar');

        expect(boton).toBeTruthy();
    });

    it('Debe aplicar la clase CSS icon-btn', () => {
        render(<IconButton>Editar</IconButton>);

        const boton = screen.getByText('Editar');

        expect(boton.classList.contains('icon-btn')).toBe(true);
    });

    it('Debe ejecutar la función onClick al presionar el botón', () => {
        const funcionClick = jasmine.createSpy('funcionClick');

        render(
            <IconButton onClick={funcionClick}>
                Eliminar
            </IconButton>
        );

        const boton = screen.getByText('Eliminar');

        boton.click();

        expect(funcionClick).toHaveBeenCalled();
    });

});
