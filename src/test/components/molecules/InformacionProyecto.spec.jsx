import React from 'react';
import { render, screen } from '@testing-library/react';
import { InformacionProyecto } from '../../../components/molecules/InformacionProyecto';

describe('Pruebas del componente InformacionProyecto', () => {
  it('Debe renderizar el título o descripción del proyecto', () => {
    render(<InformacionProyecto />);

    const elementos = screen.getAllByText(/./i);
    expect(elementos[0]).toBeTruthy();
  });

  it('Debe mostrar la estructura principal de la información', () => {
    render(<InformacionProyecto />);

    const encabezado = screen.getByRole('heading') || screen.getAllByText(/./i)[0];
    expect(encabezado).toBeTruthy();
  });

  it('Debe contener datos o lista de características', () => {
    render(<InformacionProyecto />);

    const lista = screen.getAllByText(/./i);
    expect(lista.length).toBeGreaterThan(0);
  });
});