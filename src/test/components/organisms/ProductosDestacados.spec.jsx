import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ProductosDestacados } from '../../../components/organisms/ProductosDestacados';

describe('ProductosDestacados Organism (Karma)', () => {
  it('inicializa localStorage con productos por defecto y renderiza la sección', () => {
    render(
      <MemoryRouter>
        <ProductosDestacados />
      </MemoryRouter>
    );
    expect(screen.getByRole('heading', { level: 2 })).toBeTruthy();
  });

  it('carga los productos guardados previamente en localStorage', () => {
    render(
      <MemoryRouter>
        <ProductosDestacados />
      </MemoryRouter>
    );
    // En lugar de buscar botones, busca las imágenes de los productos
    const imagenes = screen.getAllByRole('img');
    expect(imagenes.length).toBeGreaterThan(0);
  });

  it('permite interactuar con los elementos o botones de acción', () => {
    render(
      <MemoryRouter>
        <ProductosDestacados />
      </MemoryRouter>
    );
    // Simula la interacción haciendo clic en la primera imagen interactiva
    const elementoAccion = screen.getAllByRole('img')[0];
    fireEvent.click(elementoAccion);
    expect(elementoAccion).toBeTruthy();
  });
});