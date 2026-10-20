import React from 'react';
import { render, screen } from '@testing-library/react';
import { ListaNoticias } from '../../../components/organisms/ListaNoticias';

describe('Pruebas del componente ListaNoticias', () => {
  it('1. renderiza el contenedor principal section con sus clases de maquetación', () => {
    const { container } = render(<ListaNoticias />);
    const seccion = container.querySelector('section');
    
    expect(seccion).toBeTruthy();
    expect(seccion.className).toContain('row g-4');
  });

  it('2. despliega la noticia sobre El Trauco correctamente', () => {
    render(<ListaNoticias />);
    const tituloTrauco = screen.getByText(/Dato curioso #1: El Trauco en Mitos y Leyendas/i);
    
    expect(tituloTrauco).toBeTruthy();
  });

  it('3. despliega la noticia sobre Dragón Control en el metajuego', () => {
    render(<ListaNoticias />);
    const tituloDragon = screen.getByText(/¿Vuelve 'Dragón Control al Meta\?/i);
    
    expect(tituloDragon).toBeTruthy();
  });
});