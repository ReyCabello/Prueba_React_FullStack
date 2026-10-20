import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { BienvenidaInicio } from '../../../components/organisms/BienvenidaInicio';

describe('BienvenidaInicio Organism (Karma)', () => {
  it('1. renderiza el título principal de bienvenida correctamente', () => {
    render(
      <MemoryRouter>
        <BienvenidaInicio />
      </MemoryRouter>
    );
    const titulo = screen.getByRole('heading', { name: /¡encuentra las cartas que buscas!/i });
    expect(titulo).toBeTruthy();
  });

  it('2. despliega el texto descriptivo de la tienda', () => {
    render(
      <MemoryRouter>
        <BienvenidaInicio />
      </MemoryRouter>
    );
    const descripcion = screen.getByText(/bienvenido a tu tienda de singles de mitos y leyendas/i);
    expect(descripcion).toBeTruthy();
  });

  it('3. renderiza el botón para explorar productos', () => {
    render(
      <MemoryRouter>
        <BienvenidaInicio />
      </MemoryRouter>
    );
    const botonExplorar = screen.getByRole('button', { name: /explorar productos/i });
    expect(botonExplorar).toBeTruthy();
  });
});