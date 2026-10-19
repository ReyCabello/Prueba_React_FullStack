
import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Enlace } from '../../../components/atoms/Enlace';

describe('Pruebas del componente Enlace', () => {

    it('Debe mostrar correctamente el texto del enlace', () => {
        render(
            <MemoryRouter>
                <Enlace texto="Ver catálogo" destino="/catalogo" />
            </MemoryRouter>
        );

        const enlace = screen.getByText('Ver catálogo');

        expect(enlace).toBeTruthy();
    });

    it('Debe dirigir a la ruta indicada', () => {
        render(
            <MemoryRouter>
                <Enlace texto="Inicio" destino="/inicio" />
            </MemoryRouter>
        );

        const enlace = screen.getByText('Inicio');

        expect(enlace.getAttribute('href')).toBe('/inicio');
    });

    it('Debe ejecutar la función onClick al presionar el enlace', () => {
        const funcionClick = jasmine.createSpy('funcionClick');

        render(
            <MemoryRouter>
                <Enlace
                    texto="Contacto"
                    destino="/contacto"
                    onClick={funcionClick}
                />
            </MemoryRouter>
        );

        const enlace = screen.getByText('Contacto');

        enlace.click();

        expect(funcionClick).toHaveBeenCalled();
    });

});
