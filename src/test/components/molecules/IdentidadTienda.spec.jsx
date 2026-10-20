import React from 'react';
import { render, screen } from '@testing-library/react';
import { IdentidadTienda } from '../../../components/molecules/IdentidadTienda';

describe('Pruebas del componente IdentidadTienda', () => {
  it('1. renderiza el logo con el alt "Logo de Mitos y Leyendas"', () => {
    render(<IdentidadTienda />);
    const logo = screen.getByAltText('Logo de Mitos y Leyendas');
    expect(logo).toBeTruthy();
  });

  it('2. despliega el título principal "El Caldero de la Abundancia"', () => {
    render(<IdentidadTienda />);
    const titulo = screen.getByText('El Caldero de la Abundancia');
    expect(titulo).toBeTruthy();
  });
});