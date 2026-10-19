import React from 'react';
import { render, screen } from '@testing-library/react';
import Boton from '../../../components/atoms/Button';

describe('Pruebas del componente Boton', () => {

    it('Debe mostrar correctamente el texto del botón', () => {
        render(<Boton texto="Comprar" />);

        const boton = screen.getByText('Comprar');

        expect(boton).toBeTruthy();
    });

    it('Debe aplicar correctamente la variante de Bootstrap', () => {
        render(<Boton texto="Eliminar" variante="danger" />);

        const boton = screen.getByText('Eliminar');

        expect(boton.classList.contains('btn-danger')).toBe(true);
    });
    
    it('Debe ejecutar la función onClick al presionar el botón', () => {
        const funcionClick = jasmine.createSpy('funcionClick');

        render(<Boton texto="Comprar" onClick={funcionClick} />);

        const boton = screen.getByText('Comprar');

        boton.click();

        expect(funcionClick).toHaveBeenCalled();
    });

});
