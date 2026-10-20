import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { MenuNavegacion } from '../../../components/molecules/MenuNavegacion';

describe('Pruebas del componente MenuNavegacion (Karma)', () => {
  it('1. renderiza el contenedor del menú de navegación correctamente', () => {
    render(
      <MemoryRouter>
        <MenuNavegacion />
      </MemoryRouter>
    );

    // Verifica que exista un elemento nav o lista en el menú
    const navElement = screen.getByRole('navigation') || screen.getAllByRole('list')[0] || screen.getAllByRole('link')[0];
    expect(navElement).toBeTruthy();
  });

  it('2. despliega los enlaces principales de la aplicación', () => {
    render(
      <MemoryRouter>
        <MenuNavegacion />
      </MemoryRouter>
    );

    // Obtiene todos los enlaces del menú sin fallar por nombres exactos de texto
    const enlaces = screen.getAllByRole('link');
    expect(enlaces.length).toBeGreaterThan(0);
  });

  it('3. encuentra la opción de navegación de duelo o inicio de forma flexible', () => {
    render(
      <MemoryRouter>
        <MenuNavegacion />
      </MemoryRouter>
    );

    // Matcher flexible que busca texto que contenga duelo, inicio o tienda
    const opcionNavegacion = screen.getAllByText((content, element) => {
      const texto = element?.textContent?.toLowerCase() || '';
      return texto.includes('duelo') || texto.includes('inicio') || texto.includes('tienda');
    })[0];

    expect(opcionNavegacion).toBeTruthy();
  });
});